import { EmailTemplate } from '@/components/email-template'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const { email, name, message } = await req.json()

  try {
    const data = await resend.emails.send({
      from: 'Patrícia Portfolio <patriciadesa@brunosantos.dev>',
      text: '',
      to: ['patriciadesawrites@gmail.com'],
      subject: 'Portfolio Contact Form',
      react: EmailTemplate({ name, email, message })
    })

    return Response.json(data)
  } catch (error) {
    return Response.json({ error })
  }
}
