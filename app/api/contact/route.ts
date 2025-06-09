// pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

type Data = { ok: true } | { error: string }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { firstName, lastName, email, subject, message } = req.body

  if (
    !firstName ||
    !email ||
    !subject ||
    !message
  ) {
    return res.status(400).json({ error: 'Missing fields' })
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  try {
    await transporter.sendMail({
      from: `"${firstName} ${lastName}" <${process.env.SMTP_USER}>`,
      to: process.env.SEND_TO_EMAIL,
      subject,
      html: `
        <p><strong>From:</strong> ${firstName} ${lastName} &lt;${email}&gt;</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    })
    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('Mail error:', err)
    return res.status(500).json({ error: 'Failed to send email' })
  }
}
