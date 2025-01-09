#!/bin/bash

SERVER="ubuntu@65.1.108.42" 
APP_DIR="/var/www/hopefitwellness/frontend"
ARCHIVE_NAME="current.tar.gz"


# Function to deploy application
deploy() {
   echo "Deploying application to $SERVER..."


   # Upload the archive to the server
   scp $ARCHIVE_NAME $SERVER:$APP_DIR/


   ssh $SERVER << "EOF"
       set -e


       # Load asdf environment
       source ~/.asdf/asdf.sh


       # Set up the environment PATH
       export PATH="/home/ubuntu/.asdf/shims:/home/ubuntu/.asdf/bin:$PATH"


       # Change directory to the application directory
       cd /var/www/hopefitwellness/frontend


       # # Extract archive
       tar xzf current.tar.gz


       # Handle existing backup directory
       if [ -d "backup" ]; then
           rm -rf backup
       fi


       # Backup current directory if it exists
       if [ -d "current" ]; then
           mv current backup/
       fi


       # Create a new current directory
       mkdir -p current


       # Move the new build to current
       mv .next current/
       mv node_modules current/
       mv package.json current/
       mv package-lock.json current/
       mv next.config.mjs current/
       mv tailwind.config.js current/
       mv postcss.config.mjs current/

       # # Remove archive
       rm current.tar.gz

       # # Install dependencies (replace with yarn install --production)
       cd current

       # # Adjust permissions (replace with your permission settings)
       chmod -R 755 .
EOF


   echo "Deployment completed."
}


# Execute deployment function
deploy
