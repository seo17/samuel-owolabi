"use server";
import nodemailer from "nodemailer";

export async function sendMessageByEmailAction(
  name: string,
  email: string,
  message: string
) {
  const emailHTML = `
  <html>
    <head>
      <style>
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
          background-color: #f4f4f4;
        }
        table {
          max-width: 600px;
          width: 100%;
          margin: 0 auto;
        }
        .email-container {
          background-color: #ffffff;
          border-radius: 8px;
          overflow: hidden;
        }
        .header {
          background-color: #007BFF;
          padding: 20px;
          text-align: center;
          color: #ffffff;
        }
        .content {
          padding: 20px;
          color: #333333;
        }
        .footer {
          background-color: #f1f1f1;
          padding: 15px;
          text-align: center;
          font-size: 12px;
          color: #666666;
        }
      </style>
    </head>
    <body>
      <table>
        <tr>
          <td>
            <div class="email-container">
              <div class="header">
                <h1>New Message from ${name}</h1>
              </div>
              <div class="content">
                <p><strong>Sender's Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
              </div>
              <div class="footer">
                <p>2024 AI Generated.</p>
              </div>
            </div>
          </td>
        </tr>
      </table>
    </body>
  </html>
`;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.GMAIL_FROM,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
  try {
    await transporter.sendMail({
      from: `"Portfolio Message"<${process.env.GMAIL_FROM}>`, // sender address
      to: "ebenmosi17@gmail.com", // list of receiver
      subject: `Portfolio Message from ${name}`, // Subject line
      html: emailHTML,
    });

    console.log("sent");

    return { status: "ok", message: "Message sent successfully" };
  } catch (err) {
    console.log(err);
    return { error: "Error Occured" };
  }
}
