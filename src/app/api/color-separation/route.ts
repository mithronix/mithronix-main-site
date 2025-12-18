import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const formData = await request.formData();

        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const phone = formData.get('phone') as string;
        const printType = formData.get('printType') as string;
        const colors = formData.get('colors') as string;
        const message = formData.get('message') as string;
        const deadline = formData.get('deadline') as string;

        const file = formData.get('file') as File | null;

        // Basic validation
        if (!name || !email || !printType || !colors) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Configure transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions: any = {
            from: process.env.EMAIL_USER,
            to: 'mithronix.ai@gmail.com',
            replyTo: email,
            subject: `Color Separation Request - Mithronix Website`,
            text: `
Color Separation Request
------------------------
Name: ${name}
Email: ${email}
Phone: ${phone}
Print Type: ${printType}
Colors: ${colors}
Deadline: ${deadline || 'N/A'}

Message:
${message || 'N/A'}
            `,
            html: `
<h3>New Color Separation Request</h3>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Phone:</strong> ${phone}</p>
<p><strong>Print Type:</strong> ${printType}</p>
<p><strong>No. of Colors:</strong> ${colors}</p>
<p><strong>Deadline:</strong> ${deadline || 'N/A'}</p>
<br/>
<p><strong>Message:</strong></p>
<p style="background: #f5f5f5; padding: 15px; border-radius: 5px;">${(message || 'N/A').replace(/\n/g, '<br>')}</p>
            `,
        };

        // Handle attachment
        if (file) {
            const buffer = Buffer.from(await file.arrayBuffer());
            mailOptions.attachments = [
                {
                    filename: file.name,
                    content: buffer,
                },
            ];
        }

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: 'Request sent successfully' });

    } catch (error: any) {
        console.error('Email send error:', error);
        return NextResponse.json(
            { error: error.message || 'Failed to send request' },
            { status: 500 }
        );
    }
}
