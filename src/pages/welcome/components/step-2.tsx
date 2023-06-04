import { z } from "zod"

import { HiArrowSmRight, HiArrowSmLeft } from "react-icons/hi"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import {
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui"
import { toast } from "@/components/ui"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/react-hook-form/form"

import { Button } from "@/components/ui"
import { StepProps } from "./types"
import { useState } from "react"

const FormSchema = z.object({
  organizationName: z.string({
    required_error: "Organization name is required",
  }),
  organizationSize: z.string({
    required_error: "Please select your organization size",
  }),
})

type FieldValues = z.infer<typeof FormSchema>

const sizes = [
  { value: "solo", label: "Solo" },
  { value: "2-10", label: "2 - 10 members" },
  { value: "11-50", label: "11 - 50 members" },
  { value: "51-200", label: "51 - 200 members" },
  { value: "201-500", label: "201 - 500 members" },
]

export default function Step2({ onNext, onBack }: StepProps) {
  const [allowedNextStep, setAllowedNextStep] = useState(false)
  const form = useForm<FieldValues>({
    resolver: zodResolver(FormSchema),
  })

  function onSubmit(data: FieldValues) {
    setAllowedNextStep(true)

    toast({
      title: "You submitted the following values:",
      description: (
        <div className="flex flex-col gap-1.5 p-3 font-medium bg-gray-50 rounded text-md">
          <div>Organization Name: {data.organizationName}</div>
          <div>Organization Size: {data.organizationSize}</div>
        </div>
      ),
    })
  }

  return (
    <div className="">
      <h3 className="mb-2">Tell us about your organization</h3>
      <div className="mx-auto mt-8 lg:min-w-[32rem]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="organizationSize"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Organization Size</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a verified email to display" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {sizes.map((size) => (
                        <SelectItem value={size.value}>{size.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="organizationName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Organization Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Acme. Inc" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>

        <div className="flex gap-3 mx-auto mt-12">
          <Button variant="outline" onClick={onBack}>
            <HiArrowSmLeft className="mr-2" />
            Back
          </Button>

          <Button onClick={onNext} disabled={!allowedNextStep}>
            Next
            <HiArrowSmRight className="ml-2" />
          </Button>
        </div>
      </div>
    </div>
  )
}
