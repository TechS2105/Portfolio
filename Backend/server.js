import express from 'express';
import env from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import nodemailer from 'nodemailer';

env.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());


app.get('/api/send-mail', (req, res) => {

    res.status(200).json({ message: "Mail has been send successfully" });

});

const contactMail = nodemailer.createTransport({
  
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    logger: false,
    debug: true,
    secureConnection: true,
    auth: {

        user: "sovandey2105@gmail.com",
        pass: "rzyauoiywyljzswn"

    },
    tls: {

        rejectUnauthorized: true

    }

});

contactMail.verify((error) => {

    if (error) {
        
        console.log(error);

    } else {
        
        console.log("Ready to send..");

    }

});

const mobileContactMail = nodemailer.createTransport({

    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    logger: false,
    debug: true,
    secureConnection: true,
    auth: {
        
        user: "sovandey2105@gmail.com",
        pass: "rzyauoiywyljzswn"

    },
    tls: {

        rejectUnauthorized: true

    }

});

mobileContactMail.verify((error) => {

    if (error) {
        
        console.log(error);

    } else {
        
        console.log("Ready to send mail at mobile")

    }

})

app.post('/api/send-mail', async (req, res) => {

    console.log(req.body);

    const { firstname, lastname, email, textarea } = req.body;

    const mail = {

        from: `${firstname + " " + lastname}`,
        to: "sovandey2105@gmail.com",
        subject: "SSD Protfolio Contact Form",
        html: `

           <p> You got an email from your portfolio: </p>

           <table>

            <tr class="border-1">

                <td class="fw-bold border-1 py-2 ps-2"> Name: </td>
                <td class="ps-2"> ${firstname + " " + lastname} </td>

            </tr>

            <tr class="border-1">

                <td class="border-1 py-2 ps-2 fw-bold"> Email: </td>
                <td class="ps-2"> ${email}  </td>

            </tr>

            <tr class="border-1">

                <td class="border-1 fw-bold ps-2 pe-2"> Message: </td>
                <td class="ps-2"> ${textarea} </td>

            </tr>

           </table>
        
        `

    }

    contactMail.sendMail(mail, (error) => {

        if (error) {
            
            res.json(error);

        } else {
            
            res.json({

                code: 200,
                status: "Mail has been send successfully"

            })

        }

    })

});

// For Mobile email
app.get('/api/mobile/send-email', (req, res) => {

    req.status(200).json({ message: "Mail has been successfully send" });

});

app.post('/api/mobile/send-email', (req, res) => {

    const { firstname, lastname, email, textarea } = req.body;

    const mobileMail = {
      form: `${firstname + lastname}`,
      to: "sovandey2105@gmail.com",
      subject: "SSD Protfolio Contact Form",
      html: `
        
            <p> You got an email from your portfolio: </p>

           <table>

            <tr class="border-1">

                <td class="fw-bold border-1 py-2 ps-2"> Name: </td>
                <td class="ps-2"> ${firstname + " " + lastname} </td>

            </tr>

            <tr class="border-1">

                <td class="border-1 py-2 ps-2 fw-bold"> Email: </td>
                <td class="ps-2"> ${email}  </td>

            </tr>

            <tr class="border-1">

                <td class="border-1 fw-bold ps-2 pe-2"> Message: </td>
                <td class="ps-2"> ${textarea} </td>

            </tr>

           </table>

        `,
    };

    mobileContactMail.sendMail(mobileMail, (error) => {

        if (error) {
            
            res.json(error);

        } else {
            
            res.json({

                code: 200,
                message: "Mail has been succesfully send at you mobile email"

            });

        }

    });

});

app.listen(PORT, () => {

    console.log(`Server is started on port ${PORT}`);

});