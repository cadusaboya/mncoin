import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(data: Request) {
  const { subject, body, name, email } = await data.json();
  const resend = new Resend(process.env.RESEND_API_KEY);
  
  try {
    await resend.emails.send({
      from: 'mncoin@resend.dev',
      to: 'carlosepsaboya@gmail.com',
      subject: `${subject}`,
      html: `<p>From: ${name}</p>
             <p>Email: ${email}</p>
             <p>${body}</p>` // Setting the email body as HTML
    });
    return NextResponse.json({ message: "Email sent!" });
  } catch (error) {
    return NextResponse.json({ error });
  }
}