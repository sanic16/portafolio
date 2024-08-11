import { contactTemplate } from "./templates/contact";
import Handlebars from "handlebars";
import nodemailer from "nodemailer";

export async function sendMail({
  to,
  subject,
  body,
}: {
  to: string;
  subject: string;
  body: string;
}) {
  const { SENDGRID_API_KEY, MAIL_DEFAULT_SENDER } = process.env;

  const transporter = nodemailer.createTransport({
    service: "SendGrid",
    host: "smtp.sendgrid.net",
    port: 587,
    auth: {
      user: "apikey",
      pass: SENDGRID_API_KEY,
    },
  });

  try {
    await transporter.sendMail({
      from: MAIL_DEFAULT_SENDER,
      to: to,
      subject: subject,
      text: body,
      html: body,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Error al enviar el correo: ${error.message}`);
    } else {
      throw new Error(`Error al enviar el correo`);
    }
  }
}

export function compileContactTemplate(
  name: string,
  email: string,
  message: string
) {
  const template = Handlebars.compile(contactTemplate);
  const htmlBody = template({
    name,
    email,
    message,
  });

  return htmlBody;
}
