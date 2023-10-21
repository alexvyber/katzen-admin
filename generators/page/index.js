import { join } from "path"
import { readdirSync } from "fs"

const componentsDir = join(process.cwd(), "src/components")
const features = readdirSync(componentsDir)

/**
 *
 * @type {import('plop').PlopGenerator}
 */
export default {
  description: "Component Generator",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "component name",
    },
    {
      type: "list",
      name: "feature",
      message: "Which feature does this component belong to?",
      choices: ["ROOT", ...features],
      when: () => features.length > 0,
    },
    {
      type: "input",
      name: "folder",
      message: "folder in components",
      when: ({ feature }) => !feature || feature === "ROOT",
    },
  ],
  actions: (answers) => {
    const componentGeneratePath =
      !answers.feature || answers.feature === "ROOT"
        ? "src/components/{{folder}}"
        : "src/components/{{feature}}"
    return [
      {
        type: "add",
        path: `${componentGeneratePath}/{{kebabCase name}}/index.ts`,
        templateFile: "generators/component/index.ts.hbs",
      },
      {
        type: "add",
        path: `${componentGeneratePath}/{{kebabCase name}}/{{kebabCase name}}.tsx`,
        templateFile: "generators/component/Component.tsx.hbs",
      },
      {
        type: "add",
        path: `${componentGeneratePath}/{{kebabCase name}}/{{kebabCase name}}.stories.tsx`,
        templateFile: "generators/component/Component.stories.tsx.hbs",
      },
    ]
  },
}
