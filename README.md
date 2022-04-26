
============================================
# Github Actions CICD setup.

#### For REACT App with Node.js and React Router. 

============================================

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

Paste and Run Configuration command

## 12. Configure Github Actions

1. Hit enter for default group runner name. 
2. Name Runner
3. Press Enter to Skip Labels
4. Press Enter to leave _work folder as default.

## 13. Install and Start Runner

    sudo ./svc.sh install
    sudo ./svc.sh start

## 14. Configure NGINX server.

1. Navigate to sites-available folder.

        cd /etc/nginx/sites-available/

2. Edit Default File in Sites-Available folder. 

        sudo nano default

3. Comment out. 

        listen 80 default_server;
        listen [::]:80 default_server;

4. Change link to website

    root /var/www/websitename/_work/repo_name/repo_name/;

5. Add domain and ip address to server_name.

    server_name domainname.com ipaddress;

6. Update Location. Comment out # try_files $uri $uri/ =404. Paste code snippet in location.
    ```
    proxy_pass http://localhost:5000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;

    ```
7. Exit and Save.

## 15. Restart NGINX

    sudo service nginx restart

## 16. Setup Restart for site folder without needing sudo. 

Run Command

    sudo visudo -f /etc/sudoers.d/username

Paste into nano editor. 


    username ALL=(ALL) NOPASSWD: /usr/sbin/service nginx start./usr/sbin/service nginx stop./usr/sbin/service nginx restart

Save and Exit nano editor.

Reboot Server

    sudo reboot





## 17. 







# Notes

### Demo Linode CLI

```
name: Test Linode CLI
on: push
jobs:
  job-name:
    steps:
    - uses: actions/checkout@master
    - name: Setup Linode cli
      uses: brendon1555/setup-linode-cli@master
      with:
        LINODE_CLI_TOKEN: ${{ secrets.LINODE_CLI_TOKEN }}
    - run: linode-cli --help
```

## to-do

1. test.text hello world - create action to copy to linode. 
2. setup commands to build file. 
3. Setup NGINX

## Continuous Integration Steps

1. Source
  - Require Reviewers before pushing to deployment

2. Build
  - Compile Sources and Dependencies
  - Run Unit Tests
  - Check and Enforce Code Coverage. 90%

3. Test Enviroment
  - Run Integration Tests

4. Production Environment - 1 box = 10% of traffic. 
  - Alarms On Errors, Latency, Key Business Metrics
  - Bake Period - 24 hours
    - Anomaly Detection or Error Counts + Latency Breaches
    - Canary... (Coal Mine. Looks for problems)
        - cron job triggers ever few minutes. 

5. Prod Environment
  - Alarms On Errors, Latency, Key Business Metrics
  - Bake Period - 24 hours
    - Anomaly Detection or Error Counts + Latency Breaches
  c. Canary... (Coal Mine, Looks for problems)
    cron job triggers ever few minutes. 










