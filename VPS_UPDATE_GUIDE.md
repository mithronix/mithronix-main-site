# standard-version: 1.0.0

# VPS Update Instructions

Since your site is hosted on a VPS, you must manually pull the latest code and rebuild the application.

## Step 1: Connect to your VPS
Open your terminal or PuTTY and SSH into your server.

## Step 2: Navigate to Project Directory
```bash
cd /path/to/your/project/Mithronix-MainSite
# (Replace with your actual folder path)
```

## Step 3: Stop the Server (Optional but Recommended)
If you are using PM2:
```bash
pm2 stop all
```

## Step 4: Pull Latest Changes
Get the code we just pushed.
```bash
git pull origin main
```

## Step 5: Install New Dependencies
We added `nodemailer`, so this is required.
```bash
npm install
```

## Step 6: Configure Environment Variables
**CRITICAL:** You must add your email password for the contact form to work.
1. Open your env file:
   ```bash
   nano .env
   ```
2. Add/Update these lines:
   ```env
   EMAIL_USER=mithronix.ai@gmail.com
   EMAIL_PASS=your-app-password-here
   ```
   *(Note: Use a generic Gmail "App Password", not your login password)*
3. Save and exit (`Ctrl+O`, `Enter`, `Ctrl+X`).

## Step 7: Build the Application
Compile the new pages and API routes.
```bash
npm run build
```

## Step 8: Restart the Server
If using PM2:
```bash
pm2 restart all
# or
pm2 start npm --name "mithronix" -- start
```

Your VPS is now updated!
