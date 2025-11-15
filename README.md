# NodeJS-Course-by-Prashant-Sir
Complete NodeJS Learning with certification and fully implementation of projects created using nodeJS

some git commands so that can help you to push code to git :

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
