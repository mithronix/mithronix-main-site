
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, company, product, message } = body;

        // Basic validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Configure transporter
        // Using environment variables for security
        const transporter = nodemailer.createTransport({
            service: 'gmail',  // Or use host/port for generic SMTP
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Email content
        const mailOptions = {
            from: process.env.EMAIL_USER, // Sender address
            to: 'mithronix.ai@gmail.com', // Receiver address
            replyTo: email,
            subject: `New Contact Form Submission: ${product}`,
            text: `
Mithronix Website Inquiry
-------------------------
Name: ${name}
Email: ${email}
Company: ${company || 'N/A'}
Product Interest: ${product}

Message:
${message}
            `,
            html: `
<h3>New Inquiry from Mithronix Website</h3>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Company:</strong> ${company || 'N/A'}</p>
<p><strong>Product Interest:</strong> ${product}</p>
<br/>
<p><strong>Message:</strong></p>
<p style="background: #f5f5f5; padding: 15px; border-radius: 5px;">${message.replace(/\n/g, '<br>')}</p>
            `,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: 'Email sent successfully' });

    } catch (error: any) {
        console.error('Email send error:', error);
        return NextResponse.json(
            { error: error.message || 'Failed to send email' },
            { status: 500 }
        );
    }
}
