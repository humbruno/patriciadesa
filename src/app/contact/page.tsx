'use client'

import { Loader } from '@/components/loading'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

const EMAIL = 'patriciadesawrites@gmail.com'

const formSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  message: z.string().min(10, {
    message: 'Please enter a message with at least 10 characters.'
  }),
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.'
  })
})

type ValidationSchema = z.infer<typeof formSchema>

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<ValidationSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: ''
    },
    mode: 'onBlur'
  })

  function handleEmailClick() {
    navigator.clipboard.writeText(EMAIL).then(() => {
      toast.success('Copied to clipboard!')
    })
  }

  async function onSubmit(values: ValidationSchema) {
    try {
      setIsLoading(true)
      await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      })
      toast.success('Sent! I will get back to you shortly :)')
    } catch (e) {
      toast.error('Something went wrong!')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="container flex flex-col py-20 lg:py-36">
      <div className="flex flex-col gap-8 lg:flex-row">
        <div className="flex-1">
          <h3 className="mb-8 text-2xl font-semibold text-gray-700">
            Think my words will be a good fit?
          </h3>
          <h3 className="mb-4 text-2xl font-semibold text-gray-700">
            Let&apos;s collaborate!
          </h3>
          <div className="space-y-2">
            <p className="font-semibold text-gray-700 lg:text-lg">
              Drop me a line or two about your project, and we can see if we’re
              a good fit.
            </p>
            <p className="text-gray-700 lg:text-lg">
              Feel free to send questions, proposals, or even compliments - all
              are welcome.{' '}
            </p>
            <p className="text-gray-700 lg:text-lg">
              I typically respond within 1-2 business days.
            </p>
          </div>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex-1 space-y-8"
          >
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormDescription className="text-xl text-gray-700">
                    Dear Patrícia de Sá,
                  </FormDescription>
                  <FormControl>
                    <Textarea
                      rows={15}
                      placeholder="Write your message here..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormDescription className="text-base text-gray-700">
                    Best wishes,
                  </FormDescription>
                  <FormControl>
                    <Input placeholder="Your name" {...field} />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Your email" {...field} />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
            <div className="mt-5 flex flex-col gap-5 lg:flex-row">
              <Button
                disabled={form.formState.isSubmitSuccessful}
                variant={
                  form.formState.isSubmitSuccessful ? 'outline' : 'default'
                }
                type="submit"
                className={cn('w-full font-bold lg:w-auto')}
              >
                {form.formState.isSubmitSuccessful ? (
                  'Sent!'
                ) : isLoading ? (
                  <Loader />
                ) : (
                  'Send'
                )}
              </Button>
              {form.formState.isSubmitSuccessful && (
                <Button
                  onClick={() =>
                    form.reset({ email: '', message: '', name: '' })
                  }
                  type="reset"
                  className="w-full font-bold lg:w-auto"
                >
                  Send a new message
                </Button>
              )}
            </div>
          </form>
        </Form>
      </div>
      <p className="mt-20 self-end text-sm text-gray-500">
        or find me at{' '}
        <span
          onClick={handleEmailClick}
          className="inline cursor-pointer font-mono font-bold text-accent hover:underline"
        >
          {EMAIL}
        </span>
      </p>
      <Image
        width={180}
        height={180}
        alt="Click email to copy"
        src="/copy.png"
        className="self-end"
      />
    </main>
  )
}
