'use server'
import nodemailer from "nodemailer";
import { NextResponse } from 'next/server';

interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export async function POST(request: Request) {
    try {
        const { name, email, subject, message }: ContactFormData = await request.json();

        if(!name || !email || !subject || !message) {
            return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER!,
                pass: process.env.EMAIL_PASS!,
            },
        });
        console.log("Email user:", process.env.EMAIL_USER);
console.log("Email pass:", process.env.EMAIL_PASS ? "Loaded" : "Missing");


        const mailOptions = {
            from: email,
            to: process.env.EMAIL_USER,
            subject: `📩 New Message from ${name}: ${subject}`,
            text: `
               Name: ${name}
               Email: ${email}
               Subject: ${subject}
               Message: ${message}
            `,
        };

        await transporter.sendMail(mailOptions);
        return NextResponse.json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

}