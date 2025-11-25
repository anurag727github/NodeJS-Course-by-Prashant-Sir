# NodeJS-Course-by-Prashant-Sir
Complete NodeJS Learning with certification and fully implementation of projects created using nodeJS

# some git commands so that can help you to push code to git :

# Initialize npm project
npm init

# Install dependencies
npm install express
npm install --save-dev nodemon

# Run the project
npm start        # runs nodemon app.js
npm run naruto   # runs node app.js

# Git commands
git init
git add .
git commit -m "New files added with lecture 10"

# Add remote GitHub repository
git remote add origin https://github.com/anurag727github/NodeJS-Course-by-Prashant-Sir

# Push code to GitHub
git push origin main
git push -u origin main     # (first time only)

# Check git status
git status

# Optional: Fix CRLF/LF warnings
git config core.autocrlf true

# Restore a file if you want to undo local changes
git restore <file>

# Remove accidentally added node_modules
git rm -r --cached node_modules

# Everytime you edit the package.json directly so it need to run command as :
npm install

# 📦 1. Install Tailwind CLI (v4)
npm install -D @tailwindcss/cli

# 📁 2. Create Tailwind input file
public/input.css

Add inside:
@tailwind base;
@tailwind components;
@tailwind utilities;
/* Your custom CSS below */

# 🛠 3. Build Tailwind (Generate output.css)
npx @tailwindcss/cli -i ./public/input.css -o ./public/output.css --watch

# 🖥 4. Add script in package.json
"tailwind": "npx @tailwindcss/cli -i ./public/input.css -o ./public/output.css --watch"

# ▶️ 5. Run Tailwind
npm run tailwind

# 🎨 6. Use output.css in your HTML
<link rel="stylesheet" href="/output.css">

# for script named other than "start" need to run as follows :
npm run tailwind
npm run naruto
npm run test
