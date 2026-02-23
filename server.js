try { require("dotenv").config(); } catch (e) { /* dotenv optional */ }

const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const RECIPIENT_EMAIL = "nurnabihahfatiny545@gmail.com";
const SENDER_EMAIL = process.env.EMAIL_USER || RECIPIENT_EMAIL;
const SENDER_PASS = process.env.EMAIL_PASS || "";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
  if (!SENDER_PASS) {
    console.warn("⚠ EMAIL_PASS is not set. Create .env with EMAIL_USER and EMAIL_PASS (Gmail App Password), or use Formspree (see below).");
  }
});

let contactEmail = null;
if (SENDER_PASS) {
  contactEmail = nodemailer.createTransport({
    service: "gmail",
    auth: { user: SENDER_EMAIL, pass: SENDER_PASS },
  });
  contactEmail.verify((err) => {
    if (err) console.warn("Email transporter:", err.message);
    else console.log("Email ready to send");
  });
}

router.post("/contact", (req, res) => {
  if (!contactEmail || !SENDER_PASS) {
    return res.status(503).json({
      code: 503,
      status: "Not configured",
      message: "Email is not configured. Add EMAIL_PASS to a .env file (Gmail App Password). Or use Formspree: set REACT_APP_FORMSPREE_ID in .env and restart the React app (no server needed).",
    });
  }

  const name = [req.body.firstName, req.body.lastName].filter(Boolean).join(" ") || "No name";
  const email = req.body.email || "";
  const message = req.body.message || "";
  const phone = req.body.phone || "";

  const mail = {
    from: `"Portfolio Contact" <${SENDER_EMAIL}>`,
    to: RECIPIENT_EMAIL,
    replyTo: email || undefined,
    subject: "Contact Form – tinyportfolio",
    html: `<p><strong>Name:</strong> ${name}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Phone:</strong> ${phone || "—"}</p>
           <p><strong>Message:</strong></p>
           <p>${String(message).replace(/\n/g, "<br>")}</p>`,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      console.error("Send mail error:", error.message);
      return res.status(500).json({
        code: 500,
        status: "Error",
        message: "Could not send email. Check that EMAIL_PASS in .env is a Gmail App Password (not your normal password).",
      });
    }
    res.json({ code: 200, status: "Message Sent" });
  });
});
