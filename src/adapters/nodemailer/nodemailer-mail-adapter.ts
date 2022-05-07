import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "f7bcb2a8789d89",
    pass: "d6b24fbec668c4"
  }
});

export class NodemailerMailAdapter implements MailAdapter{
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Diego Fernandes <lucassnts963@gmail.com>',
      subject: subject,
      html: body,
   })}
}