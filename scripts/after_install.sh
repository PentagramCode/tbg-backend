#!/bin/bash
echo 'run after_install.sh: ' >> /home/ec2-user/tbg-backend/deploy.log

echo 'cd /home/ec2-user/nodejs-server-cicd' >> /home/ec2-user/tbg-backend/deploy.log
cd /home/ec2-user/tbg-backend >> /home/ec2-user/tbg-backend/deploy.log

echo 'npm install' >> /home/ec2-user/tbg-backend/deploy.log 
npm install >> /home/ec2-user/tbg-backend/deploy.log