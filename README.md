# Github Actions CICD setup.

##### For REACT App with Node.js and React Router. 

======


## 1. Create new repo from this template. 

## 2. Clone Repo to computer and install. 

    
    git clone 
    npm i
    

## 3. Update Site info 

1. Title and Description on index.html.
2. Project Name on Root level package.json

## 4. Push changes to git. 

## 5. Create Ubunto Server and SSH into root level. 

## 6. Run Update
  
    sudo apt update
    

## 7. Install Node Js
    
    sudo apt install nodejs
    node -v

use node -v to verify install.
## 8. Install NGINX

    sudo apt update
    sudo apt install nginx
    sudo apt-get install ufw
    sudo ufw allow 'Nginx HTTP'
    systemctl status nginx
    

** UFW = Uncomplicated Firewall
https://help.ubuntu.com/community/UFW


## 9. Create New User - Cannot be root user

    adduser username

Set Sudo Privilages

    sudo usermod -aG sudo username
    
Switch to new User.

    su username

## 10. Make New Site Folder
Go to NGINX WWW folder.   
    
    cd /var/www/

Make new website folder.
    
    sudo mkdir websitename

Change Directory to New Folder. 

    cd websitename

## 11. Setup Runner on New Githup Repo

In Repo Settings/Actions/MakeNewRunner

Set Operating System to Linux Architectur X64.

Copy and Paste runner commands in the folder created in step 10. (You cannot do this step as a root user.)

Skip first command ` mkdir actions-runner && cd actions-runner ` because we already created the website folder in step 10. 

Download Runner Package and Extract. 

Remove tar.gz file after extracted. 
    
    sudo rm -r filename


Run this command to allow user to "Create the Runner and start the configuration" 

    sudo chmod -R 777 /var/www/websitename

Paste and Rund Configuration command

## 12. Configure Github Actions

1. Hit enter for default group runner name. 
2. Name Runner
3. Press Enter to Skip Labels
4. Press Enter to leave _work folder as default.














