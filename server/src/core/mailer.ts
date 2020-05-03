import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '8f363fd4440246',
    pass: 'c1c5945baa0702',
  },
});

export default transport;
