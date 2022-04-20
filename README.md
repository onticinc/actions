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
    
    cd /var/www/
    sudo mkdir websitename
    












