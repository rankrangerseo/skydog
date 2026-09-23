"use strict";
const nodemailer = require("nodemailer");
require("dotenv").config();
const { email,password,sendTo } = process.env;

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: email,
    pass: password
  }
});

const sendEmail = async (data) => {
  try {
    let msg = await transporter.sendMail({
      from: `"Ment Tech Labs Pvt. ltd."`, // sender address
      to: sendTo, // list of receivers
      bcc: bccEmail,
      subject: "You got new lead: " + data.fullName, // Subject line
      text: "New Lead", // plain text body
      html: `<div style="text-align:center;max-width: 600px; margin: 20px auto; padding: 20px; background-color: #ffffff; border-radius: 5px; box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.5);">
      <img width="200px" src="https://i.ibb.co/FHZYMcK/Group-2172.png" alt="Weblogo" border="0"/>
      <br/><br/>
        <h1 style="text-align: center; color: #163300;">New Project From ${data.fullName}</h1>
        <p style="text-align: left; font-size: 16px; color: #333;">Telegram: ${data.telegram}</p>
                <p style="text-align: left; font-size: 16px; color: #333;">Phone: ${data?.phone}</p>
              <p style="text-align: left; font-size: 16px; color: #333;">Company: ${data?.companyName}</p>
          <p style="text-align: left; font-size: 16px; color: #333;">Email: ${data?.email}</p>
       <br/>
       <h3 style="font-weight:bold;text-align:left">Project Description </h3>
        <p style="text-align:left; font-size: 16px; color: #333;">${data.projectDescription}</p>
        <p style="text-align: center; font-size: 16px; color: #333;">Best regards,<br> Ment Tech</p>
        <hr style="border: none; border-bottom: 1px solid #ddd; margin: 20px 0;">
    </div>` // html body
    });
    
    console.log("Message sent: %s", msg);
    return msg;
  } catch (error) {
    console.log(error);
  }
};
module.exports = sendEmail;
