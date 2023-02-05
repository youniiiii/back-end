import log4js from "log4js";
import mongoose from 'mongoose';
import 'dotenv/config'

const config = {
    fileSystem: {
        path: './archives'
    },
    mongodb: {
        cnxStr: 'mongodb+srv://diego:contri@cluster0.lx2r1rq.mongodb.net/?retryWrites=true&w=majority',
        options: {
            serverSelectionTimeoutMS: 5000,
        }
    },
    firebase: {
        "project_id": "backend-coderhouse-68f3c",
        "client_email": "firebase-adminsdk-gvwwh@backend-coderhouse-68f3c.iam.gserviceaccount.com",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCN6f2rD+pz+kIX\nVPwRC2WYOetxlXjK4x4Ea9ME0RUZ7eZ7/TP1DtbUIdX0uCazKcm4AudB3FGBKaD9\n9M8qOxJRW4ezqm8G8RoakS5baU5KqP4U5qM2afhf8NS//EhJIlorPEsfM3hlPLkB\nuA7MvAuD1G8iJAV9LyczyLlKkovcr2CG6fshU/ywqKmoIlTDk2HhHAIGWhWhpq7Q\nPBQBJoObfNXuRi9QgHgJ9Vlt4Coa2xqyOFrp4GtYqR5A8N3XZ1mCIX9rm9CyII9w\nSapyL7K0PYwsfmCtylgF+cPS3eTW+6H3Z5Ula3KSA66naJNVj9u8uPdLCZqeLvwr\nVgq1TP5bAgMBAAECggEAB4gwwiCBIBCwlfkZER/aujPwxBbb0guF2f7jCfFoPk0Q\ncOo6ag+UkAO6YwJXGNE8oeXoN5L68cZaLhW33RTviZ6NsEJ5IWmF1NJ5ybjoF9xU\n8ppfH+c18IRMC7iBxFKXbeNbAAKaVD00ezE1T+EhzKhnZuzPLHARPkAGsueI7CMq\ng5c8ES0mvdZGoG7FdYpZ4ES5Yir0syK2W2K3bIuOmv/XuHqlsZVnw2b4DAV0+f5N\n9RTLM0PxxTFdaM1POOmervIla8zHpiqHK7cjraH1eJwRMOB8I/I39vqX2NIZatwY\nHZfz0fQJWewYYlGtb5bcoHSQ+kGx1WUGRmZ8M7gKuQKBgQDDTzP7HxUgcKqbdiI5\nRH1PDM+NEUWLpgJ/lMsIMHuBbPGAp39QVXWG8MEs2JhCQxsLJnqOf9N8BoFq+8Va\nULTeLYQOm+r0Ki6nOvJ3VxYn6y5IaugkSnJaaXmJliv/jBGloxl1qPNjJ6Sbl248\ncnECWET1sPW1mkipaKCqKqcP/wKBgQC6AzRkzvS0I8D70TBrpZFSATkgRyqnHwlS\nVNoopX3bZ04Fi6/e/Pk6ZGRfZC2bSrC7OQKwwuwbeEst8lGciIY0iUZlTzKbZn5h\nud5e/ME9qVLXvgdnjwKffSfsEdDD1TeJJWr+AX8abwx/vKKnELrJ1vuROuPUAeYB\nDz54pHBRpQKBgQCpu9xl4jZfEesC3iCR+laYa364jwkMewJy0+G6xT+gVAhxkZ9Q\nNmTEF9kZ20Y/V8hZ4V/jFW26vICedB2oBrmY2J+KfrAq77nJta3gTvu/R2DaqKYE\nW/qTXlS0YKDuHlF7zImkumaChoJEgc7Yk3Bo5ENR7i8rWuDI8VenaxfzCwKBgA8Y\nD3pWqNitRg2pDerORpqG6uHJpJZnGFSL+h/uPeY93cDpct3/XSH134c2E9VUHD81\nAxjg2FPqUP9reF/hXDKLKSEzagHeMUcw0/CVRgEA6m4DR4qJukbC2yh20Z/yf00r\nsiDmci/s7vC2l+RCoUWbolJImxArD0TqvcEAZvTZAoGATZsjzfQpL/jJbCYafDWl\nqZKp64p7FyCdjo3ULY1/vrcsCbV+kyvnuDkDLf82Jw7DkW3/RcEeuTqXYZnLgnHG\nMWWF9NzyRGzoxQbh05+7Zd/y/G1waq3WzgPFRLOq06mh+96ur9btLGLNcoEsEOhN\n7/NRM6qzua1Ne6unbh+Ym1s=\n-----END PRIVATE KEY-----\n"
    }
};

log4js.configure({
    appenders: {
        infoConsole: { type: 'console' },
        warnFile: { type: 'file', filename: 'warn.log' },
        errorFile: { type: 'file', filename: 'error.log' }
    },
    categories: {
        default: { appenders: ['infoConsole'], level: 'trace' },
        consola: { appenders: ['infoConsole'], level: 'info' },
        archivoWarn: { appenders: ['warnFile'], level: 'warn' },
        archivoError: { appenders: ['errorFile'], level: 'error' }
    }
});

await mongoose.connect(config.mongodb.cnxStr, config.mongodb.options);

export const TYPE_PERS =  "json";
export const TYPE_SERVER = "Fork";
export const loggerConsole = log4js.getLogger("consola");
export const loggerWarn = log4js.getLogger("archivoWarn");
export const loggerError = log4js.getLogger("archivoError");
export default config

export const NODE_ENV = process.env.NODE_ENV ?? 'development'

export const nodemailerUser = process.env.MAIL_AUTH_USER
export const nodemailerPass = process.env.MAIL_AUTH_PASS

export const twilioAccountSid = process.env.TWILIO_ID
export const twilioAuthToken = process.env.TWILIO_TOKEN
export const twilioSmsPhoneNumber = process.env.TWILIO_SMS_NUMBER
export const twilioWhatsappPhoneNumber = process.env.TWILIO_WHATSAPP_NUMBER
export const smsAdmin = process.env.SMS_ADMIN
export const emailAdmin = process.env.EMAIL_ADMIN