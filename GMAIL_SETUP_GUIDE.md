# How to Create a Gmail App Password for Nodemailer

If your contact form fails to send email, it is likely because Gmail blocked the login attempt. To fix this, you must generate an **App Password**.

## Step 1: Enable 2-Step Verification
1. Go to your [Google Account Security](https://myaccount.google.com/security).
2. Look for **"2-Step Verification"**.
3. If it is OFF, click it and turn it **ON**. (This is required).

## Step 2: Generate App Password
1. Once 2-Step Verification is ON, search for **"App passwords"** in the top search bar (or look under "2-Step Verification" settings).
   * *If you don't see it, go directly to: https://myaccount.google.com/apppasswords*
2. Create time a new app name: "Mithronix Server".
3. Click **Create**.
4. Google will show you a 16-character password (e.g., `abcd efgh ijkl mnop`).

## Step 3: Update VPS Environment
1. SSH into your VPS.
2. Open your environment file:
   ```bash
   nano .env
   ```
3. Update `EMAIL_PASS` with this new 16-character code (remove spaces if you want, or keep them, usually spaces are ignored or you can remove them to be safe):
   ```env
   EMAIL_PASS=abcdefghijklmnop
   ```
4. Save and Exit (`Ctrl+O`, `Enter`, `Ctrl+X`).

## Step 4: Restart Server
```bash
pm2 restart all
```

Now try the contact form again.
