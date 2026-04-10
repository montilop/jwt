const path = require('path')
const nodeMailer = require('nodemailer')

require('dotenv').config({ path: path.join(__dirname, '..', '.env') })

class MailService {
    /*constructor() {
        this.transporter = nodeMailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            },
        })
    }*/

    async sendActivationMail(to, link) {
        /*await this.transporter.sendMail({
            from: process.env.SMTP_USER,
            to,
            subject: `Активация аккаунта на ${process.env.API_URL}`,
            text: `Для активации перейдите по ссылке: ${link}`,
            html: `
                <div>
                    <h1>Для активации перейдите по ссылке</h1>
                    <a href="${link}">${link}</a>
                </div>
            `,
        })*/
    }
}

module.exports = new MailService()
