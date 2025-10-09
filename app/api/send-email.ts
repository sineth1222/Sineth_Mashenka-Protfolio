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
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body {
              margin: 0;
              padding: 0;
              font-family: Arial, sans-serif;
              background-color: #f4f4f4;
              color: #333;
            }
            .container {
              max-width: 600px;
              margin: 20px auto;
              background-color: #ffffff;
              border-radius: 8px;
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
              overflow: hidden;
            }
            .header {
              background-color: #2c3e50;
              padding: 20px;
              text-align: center;
              color: #ffffff;
            }
            .header h1 {
              margin: 0;
              font-size: 24px;
            }
            .content {
              padding: 30px;
            }
            .content p {
              line-height: 1.6;
              margin: 10px 0;
            }
            .details {
              background-color: #f9f9f9;
              padding: 15px;
              border-radius: 5px;
              margin: 20px 0;
            }
            .details p {
              margin: 5px 0;
              font-size: 14px;
            }
            .footer {
              background-color: #2c3e50;
              padding: 10px;
              text-align: center;
              color: #ffffff;
              font-size: 12px;
            }
            .footer a {
              color: #3498db;
              text-decoration: none;
            }
            @media only screen and (max-width: 600px) {
              .container {
                margin: 10px;
              }
              .content {
                padding: 20px;
              }
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Thank You for Reaching Out!</h1>
            </div>
            <div class="content">
              <p>Dear ${firstname} ${lastname},</p>
              <p>Thank you for contacting me! I have received your message and will get back to you soon.</p>
              <div class="details">
                <p><strong>Service:</strong> ${service}</p>
                <p><strong>Message:</strong> ${message}</p>
              </div>
              <p>I'm excited to discuss your project and bring your ideas to life!</p>
              <p>Best regards,<br>Sineth Mashenka</p>
            </div>
            <div class="footer">
              <p>&copy; 2025 Sineth Mashenka | <a href="mailto:sinethmashenka1222@gmail.com">sinethmashenka1222@gmail.com</a></p>
            </div>
          </div>
        </body>
        </html>
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