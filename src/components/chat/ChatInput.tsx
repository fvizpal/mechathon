"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Form, FormControl, FormField, FormItem } from "../ui/form"
import { Input } from "../ui/input"
import { Paperclip } from "lucide-react"

const ChatInputSchema = z.object({
  content: z.string().min(1),
})

const ChatInput = () => {

  const form = useForm<z.infer<typeof ChatInputSchema>>({
    resolver: zodResolver(ChatInputSchema),
    defaultValues: {
      content: "",
    }
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async () => {

  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className=" relative p-4 pb-6">
                  <button
                    className="absolute flex items-center justify-center top-6 rounded-full "
                  >
                    <Paperclip />
                  </button>
                  <Input
                    disabled={isLoading}
                    placeholder="Message"
                    className=" px-10 py-5"
                    {...field}
                  />
                  {/* //TODO : EMOJI  */}
                </div>
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}

export default ChatInput