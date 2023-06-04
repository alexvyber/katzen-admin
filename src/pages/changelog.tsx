import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Separator,
} from "@/components/ui"
import { Badge } from "@/components/ui/badge"

import { cx } from "cvax"

const items = [
  {
    version: "Version 3.3.3",
    date: "1 February 2023",
    changes: [
      {
        name: "Some Stuff",
        tag: "added",
      },
      {
        name: "Some Stuff",
        tag: "fixed",
      },
      {
        name: "Some Stuff",
        tag: "fixed",
      },
    ],
  },
  {
    version: "Version 2.3.4",
    date: "24 January 2023",
    changes: [
      {
        name: "Some Stuff",
        tag: "added",
      },
      {
        name: "Some Stuff",
        tag: "added",
      },
      {
        name: "Some Stuff",
        tag: "update",
      },
      {
        name: "Some Stuff",
        tag: "update",
      },
      {
        name: "Some Stuff",
        tag: "fixed",
      },
    ],
  },
  {
    version: "Version 1.3.4 ",
    date: "3 January 2023",
    changes: [
      {
        name: "Some Stuff",
        tag: "added",
      },
      {
        name: "Some Stuff",
        tag: "update",
      },
      {
        name: "Some Stuff",
        tag: "fixed",
      },
    ],
  },
  {
    version: "Version 1.0.0 ",
    date: "29 December 2022",
    changes: [
      {
        name: "Initial Release",
        tag: undefined,
      },
    ],
  },
]
function Changelog() {
  return (
    <div className="grid grid-cols-12 gap-5">
      <div className="col-span-12 lg:col-span-8">
        <Card>
          <CardHeader>
            <CardTitle>Version's</CardTitle>
          </CardHeader>
          <Separator />
          <CardContent className="pt-6">
            <div>
              <Badge className="text-white bg-primary-500">new</Badge>
            </div>
            <div className="mt-6 space-y-5">
              <Accordion type="single" collapsible>
                {items.map((item, i) => (
                  <AccordionItem key={i} value={item.version} className="border-none">
                    <AccordionTrigger className="flex justify-between py-4 px-8 w-full text-base font-medium text-gray-600 bg-gray-50 border-none transition duration-200 cursor-pointer dark:text-gray-300 dark:bg-gray-700 text-start">
                      <span>
                        {item.version}
                        <span className="text-xs font-semibold text-gray-400">
                          - Published on {item.date}
                        </span>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="text-sm font-normal text-gray-600 bg-white border-none dark:text-gray-300 dark:bg-gray-900 dark:border-gray-700">
                        <div className="py-4 px-8">
                          {item.changes.map((data, j) => (
                            <div key={j}>
                              <div className="flex items-center mt-2 space-x-3 text-sm text-gray-600 dark:text-gray-300">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                                <span>{data.name}</span>
                                <span
                                  className={cx(
                                    "rounded-full px-2 text-xs capitalize",
                                    data?.tag === "added" && "bg-indigo-100 text-indigo-500",
                                    data?.tag === "update" && "bg-yellow-100 text-yellow-500",
                                    data?.tag === "fixed" && "bg-red-100 text-red-500"
                                  )}
                                >
                                  {data?.tag}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="col-span-12 lg:col-span-4">
        <Card>
          <CardHeader>
            <CardTitle>CHANGELOG</CardTitle>
          </CardHeader>

          <Separator />

          <CardContent className="pt-6">
            <h5 className="text-xs font-medium">VERSION HISTORY</h5>
            <ul className="flex flex-col gap-2">
              {items.map((item, i) => (
                <li
                  className="flex justify-between items-center pt-3 pb-1 text-xs text-gray-600 border-b dark:text-gray-300"
                  key={i}
                >
                  <span>{item.version} </span>
                  <span>{item.date}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Changelog
