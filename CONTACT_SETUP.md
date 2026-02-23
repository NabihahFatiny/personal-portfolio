# Contact form setup (fix "Failed to send email")

Messages are sent to **nurnabihahfatiny545@gmail.com**. Use **one** of these options.

---

## Option A: Formspree (recommended – no Gmail, no server)

1. Go to **[formspree.io](https://formspree.io)** and sign up (free).
2. Click **"New form"**, name it e.g. "Portfolio".
3. Set the form email to **nurnabihahfatiny545@gmail.com**.
4. Copy your **form ID** from the form URL: `https://formspree.io/f/XXXXX` → the ID is `XXXXX`.
5. In the project root, copy `.env.example` to `.env`:
   - Windows: `copy .env.example .env`
   - Mac/Linux: `cp .env.example .env`
6. Open `.env` and set:
   ```
   REACT_APP_FORMSPREE_ID=XXXXX
   ```
   (replace `XXXXX` with your form ID)
7. Restart the React app (`npm start`). You do **not** need to run `node server.js`.
8. Submit the contact form – it should work and you’ll see "Message sent successfully."

---

## Option B: Node server + Gmail

1. Copy `.env.example` to `.env` and set:
   ```
   EMAIL_USER=nurnabihahfatiny545@gmail.com
   EMAIL_PASS=your_16_character_gmail_app_password
   ```
2. Get a Gmail App Password:
   - Google Account → Security → 2-Step Verification (turn on if needed)
   - App passwords → Generate → copy the 16-character password into `EMAIL_PASS`
3. Run **both** the React app and the server: `npm run dev`
4. Use the contact form – messages will be sent via Gmail to nurnabihahfatiny545@gmail.com.
