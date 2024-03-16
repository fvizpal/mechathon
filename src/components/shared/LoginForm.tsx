'use client'

import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { LoginSchema } from '@/schemas';
import { useState, useTransition } from 'react';
import { login } from '@/lib/actions/login';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FormError } from './FormError';
import { FormSuccess } from './FormSuccess';

const LoginForm = ({ setIsLogin }: {
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const router = useRouter();

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      login(values)
        .then((data) => {
          if (data?.error) {
            form.reset();
            setError(data.error)
          }

          if (data?.success) {
            form.reset();
            setSuccess(data.success);
          }
        }).catch(() => setError("Something went wrong"));
    })
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder='Enter your email' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder='Enter your password' {...field} />
              </FormControl>
              <Button
                size="sm"
                variant="link"
                asChild
                className="px-0 font-normal"
              >
                <Link href="/auth/reset">
                  Forgot password?
                </Link>
              </Button>
              <FormMessage />
            </FormItem>
          )}
        />
        <div>
          <FormError message={error} />
          <FormSuccess message={success} />
          <Button disabled={isPending} type="submit">Submit</Button>
        </div>
      </form>
      <div onClick={() => setIsLogin(false)} className=' underline'>
        Are you new here? SignUp...
      </div>
      {/* TODO: ADD SUCCESS AND ERROR COMPONENETS  */}
    </Form>
  )
}

export default LoginForm