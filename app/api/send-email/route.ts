import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { firstname, lastname, email, phone, service, message } =
      await request.json();

    // Create a transporter using your email service (e.g., Gmail)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASS, // Your Gmail App Password
      },
    });

    // Email to you (form submission details)
    const mailToOwner = {
      from: process.env.EMAIL_USER, // Sender address
      to: "sinethmashenka1222@gmail.com", // Your email address
      subject: `New Contact Form Submission from ${firstname} ${lastname}`,
      text: `
        Name: ${firstname} ${lastname}
        Email: ${email}
        Phone: ${phone}
        Service: ${service}
        Message: ${message}
      `,
    };

    // Auto-reply email to the user
    const mailToUser = {
      from: process.env.EMAIL_USER, // Sender address
      to: email, // User's email address from form
      subject: "Thank You for Contacting Me!",
      text: `
        Dear ${firstname} ${lastname},

        Thank you for reaching out! I have received your message and will get back to you soon. 
        
        Here are the details you submitted:
        
        Service: ${service}
        Message: ${message}
        
        Best regards,
        Sineth Mashenka
      `,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(mailToOwner),
      transporter.sendMail(mailToUser),
    ]);

    return NextResponse.json({ message: "Emails sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error sending emails:", error);
    return NextResponse.json(
      { error: "Failed to send emails" },
      { status: 500 }
    );
  }
}