import { createTransport } from "nodemailer";
const key = process.env.key;
const transporter = createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.email,
        pass: key
    },
});

const sendContactForm = async (req, res) => {
    const { data, receiver } = req.body;
    let message = `<h2>Aadhar Card Information Received</h2>
    <p><strong>Title:</strong> ${data.title}</p>
    <p><strong>Hindi Name:</strong> ${data.hindiName}</p>
    <p><strong>Gender:</strong> ${data.gender}</p>
    <p><strong>Father's Name:</strong> ${data.father}</p>
    <p><strong>Date of Birth:</strong> ${data.dob}</p>
    <p><strong>Hindi Address:</strong> ${data.hindiAddress}</p>
    <p><strong>IP Address:</strong> ${data.ipAddress}</p>`
    const mailOption = {
        from: `${process.env.NEXT_PUBLIC_DOMAIN} <${process.env.email}>`,
        to: receiver,
        subject:`New Aadhar Generated`,
        html: message
    };
    transporter.sendMail(mailOption, (err, info) => {
        if (err) {
            return res.json({success:false, msg:err.message})
        }
        return res.json({ success: true, info });
    });

}
export default sendContactForm;