'use client'

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
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

const EMAIL = 'patriciadesawrites@gmail'

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

  function onSubmit(values: ValidationSchema) {
    console.log(values)
    toast.success('Sent! I will get back to you shortly :)')
  }

  return (
    <main className="container flex flex-col">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
          <div className="mt-5 flex gap-5">
            <Button
              variant={form.formState.isSubmitted ? 'outline' : 'default'}
              type="submit"
            >
              {form.formState.isSubmitted ? 'Sent!' : 'Send'}
            </Button>
            {form.formState.isSubmitted && (
              <Button
                onClick={() => form.reset({ email: '', message: '', name: '' })}
                type="reset"
              >
                Send a new message
              </Button>
            )}
          </div>
        </form>
      </Form>
      <p className="mt-20 self-end text-sm text-gray-500">
        or find me at{' '}
        <span
          onClick={handleEmailClick}
          className="inline cursor-pointer font-mono font-bold text-green-500 hover:underline"
        >
          {EMAIL}
        </span>
      </p>
    </main>
  )
}
