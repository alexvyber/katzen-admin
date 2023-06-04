import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Container,
} from "@/components/ui"

import { BasicAnnotation } from "./basic-annotation"
import { BasicWorldMap } from "./basic-world"
import { MapChartWithTooltip } from "./map-chart-with-tooltip"

const maps = [
  // React Simple Maps
  {
    title: "React Simple Maps",
    description: "World map",
    component: BasicWorldMap,
  },
  {
    title: "React Simple Maps",
    description: "With annotation",
    component: BasicAnnotation,
  },

  {
    title: "React Simple Maps",
    description: "With tooltip",
    component: MapChartWithTooltip,
  },
] as const

const Maps = () => {
  return (
    <Container className="space-y-3">
      {maps.map(({ title, description, component: Component }) => (
        <Card>
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-hidden rounded-lg border">
              <Component />
            </div>
          </CardContent>
        </Card>
      ))}
    </Container>
  )
}

export default Maps
