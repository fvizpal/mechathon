"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Form, FormControl, FormField, FormItem } from "../ui/form"
import { Input } from "../ui/input"
import { Paperclip } from "lucide-react"
import qs from "query-string"
import axios from "axios"
import { useRouter } from "next/navigation"
import { useModal } from "@/hooks/useModalStore"

const ChatInputSchema = z.object({
  content: z.string().min(1),
})

interface ChatInputProps {
  apiUrl: string
  query: Record<string, any>
  name: string
  type: "conversation" | "group"
}
const ChatInput = ({ apiUrl, query, name, type }: ChatInputProps) => {
  const { onOpen } = useModal();
  const router = useRouter();

  const form = useForm<z.infer<typeof ChatInputSchema>>({
    resolver: zodResolver(ChatInputSchema),
    defaultValues: {
      content: "",
    }
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof ChatInputSchema>) => {
    try {
      const url = qs.stringifyUrl({
        url: apiUrl,
        query
      });

      await axios.post(url, values);

      form.reset();
      router.refresh();
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} style={{ background: "#aeccc6" }} className="flex flex-col h-screen">
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className=" relative p-4 pb-6">
                  <button
                    className="absolute flex items-center justify-center top-6 rounded-full "
                    onClick={() => onOpen("messageFile", { apiUrl, query })}
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