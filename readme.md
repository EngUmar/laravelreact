Please follow the guide.

git clone
update the .env file along with database connection
composer install
php artisan migrate
npm install
Install Passport
Open a terminal window and install the passport using following command

php artisan passport:install
Update the Passport keys in .env file
Copy the keys for password grants in .env file

PASSWORD_CLIENT_ID=2
PASSWORD_CLIENT_SECRET=xxxxxxxxxxxxxxxxxxxxxxxxxxxxx

Set the App your localhost as 
www.laravelreact.test

<VirtualHost *:80>
    DocumentRoot "YouFolder/public"
    ServerName www.blog.test
   <Directory "YourFolder/public">
		DirectoryIndex index.php
         AllowOverride All
         Require all granted
         Order allow,deny
         Allow from all
    </Directory>
</VirtualHost>

Set the APP_URL in .env file (e.g)

APP_URL=www.laravelreact.test
Set the APP Title

Compile assets one time.

npm run dev

OR or if you would like to compile assets on runtime then copy paste following command in terminal

npm run watch 
