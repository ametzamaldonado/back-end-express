# Creating a Express Server

This project was created to be utilized as a starting template for a back-end server, intending to use JSON. Further modifications would be necessary to use SQL (see bottom of repo).


(1) Make sure to first create an .env file and write the following code:
###
    PORT=9000

(2) To run this template, enter the following command:
### 
    “npm start”  OR  “npm run dev”
    
<br>
<br>

### <u> In order to copy and use this template, perform the following: </u>

1. Log into your own account on GitHub.
2. In the '+' menu on the upper right, choose Import repository
3. Complete the Import form fields:
    - Your old repository’s clone URL: enter this exactly: https://github.com/ametzamaldonado/back-end-express
    - Choose your own account as owner and type a repo name
4. Click Begin import.
5. Wait for the import to complete. If the repo is imported successfully, you will see a confirmation message. If you don’t see a success message, go back to 1 and start over.
6. Confirm your copy exists. Click the link on your new repository to see it on GitHub.
7. Confirm your copy works.

<br> 

**SQL Notes**
* For SQL, you'll need a *'db'* folder with the following files:
    * schema.sql  
    * seed.sql
    * dbConfig.js
        ```
        // sample code below:
        const pgp = require('pg-promise')();
        require('dotenv').config();
        const databaseUrl = process.env.DB_URL;

        const cn = {
        connectionString: databaseUrl,
        allowExitOnIdle: true,
        max: 30,
        };

        const db = pgp(cn);

        module.exports = db;
        ```
* *'contollers'* folder 
* *'queries'* folder
