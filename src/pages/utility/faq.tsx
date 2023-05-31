import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Container,
} from "@/components/ui"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui"

const faqTitles = [
  {
    title: "Getting started",
  },
  {
    title: "Privacy & security",
  },
  {
    title: "Legal",
  },
]

const allFaqs = [
  [
    {
      title: "How does Dashcode work?",
      content:
        "Jornalists call this critical, introductory section the  and when bridge properly executed, it's the that carries your reader from anheadine try at attention-grabbing to the body of your blog post.",
    },
    {
      title: "Where i can learn more about using Dashcode?",
      content:
        "Jornalists call this critical, introductory section the  and when bridge properly executed, it's the that carries your reader from anheadine try at attention-grabbing to the body of your blog post.",
    },
    {
      title: "Why Dashcode is so important?",
      content:
        "Jornalists call this critical, introductory section the  and when bridge properly executed, it's the that carries your reader from anheadine try at attention-grabbing to the body of your blog post.",
    },
    {
      title: "Where can i find Dashcode?",
      content:
        "Jornalists call this critical, introductory section the  and when bridge properly executed, it's the that carries your reader from anheadine try at attention-grabbing to the body of your blog post.",
    },
    {
      title: "Why Dashcode is so important?",
      content:
        "Jornalists call this critical, introductory section the  and when bridge properly executed, it's the that carries your reader from anheadine try at attention-grabbing to the body of your blog post.",
    },
  ],
  [
    {
      title: "How does Dashcode work?",
      content:
        "Jornalists call this critical, introductory section the  and when bridge properly executed, it's the that carries your reader from anheadine try at attention-grabbing to the body of your blog post.",
    },
    {
      title: "Where i can learn more about using Dashcode?",
      content:
        "Jornalists call this critical, introductory section the  and when bridge properly executed, it's the that carries your reader from anheadine try at attention-grabbing to the body of your blog post.",
    },
  ],
  [
    {
      title: "How does Dashcode work?",
      content:
        "Jornalists call this critical, introductory section the  and when bridge properly executed, it's the that carries your reader from anheadine try at attention-grabbing to the body of your blog post.",
    },
    {
      title: "Where i can learn more about using Dashcode?",
      content:
        "Jornalists call this critical, introductory section the  and when bridge properly executed, it's the that carries your reader from anheadine try at attention-grabbing to the body of your blog post.",
    },
    {
      title: "Where can i find Dashcode?",
      content:
        "Jornalists call this critical, introductory section the  and when bridge properly executed, it's the that carries your reader from anheadine try at attention-grabbing to the body of your blog post.",
    },
  ],
]

export default function Faq() {
  return (
    <Container>
      <Tabs defaultValue={"0"} className="grid grid-cols-12 gap-5">
        <div className="col-span-12 lg:col-span-4 xl:col-span-3">
          <TabsList className="flex  flex-col">
            {faqTitles.map((item, i) => (
              <TabsTrigger className="w-full" value={i.toString()}>
                {item.title}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        <div className="col-span-12 lg:col-span-8 xl:col-span-9">
          {allFaqs.map((questions, index) => (
            <TabsContent value={index.toString()}>
              <Accordion type="single" collapsible>
                {questions.map((queston, index) => (
                  <AccordionItem value={index.toString()}>
                    <AccordionTrigger>{queston.title}</AccordionTrigger>
                    <AccordionContent>{queston.content}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </Container>
  )
}
