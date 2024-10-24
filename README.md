# mytinerary-back-misraimHernandez
MyTinerary Backend - Misraim Hernández
This repository contains the backend code for the MyTinerary project as part of Sprint 2.

Installation Instructions
1. Clone the repository
First, clone this repository to your local machine. Then, navigate to the project’s root folder using the following command:

cd mytinerary-misraimHernandez
2. Install dependencies
Once inside the project folder, run the following commands in the terminal to install all required dependencies:

npm init -y
npm install express
npm install --save nodemon
npm install dotenv
npm install mongoose
npm install cors
npm install morgan
3. Environment configuration
In the root folder of the project, create a .env file. The content for this file is available in the Sprint delivery links.

4. Optional: Populate the database
If you want to load predefined data into the database, run the following command:

npm run dataCities

5. Use the existing database
If you don’t want to load new data and prefer to use the existing database, just ensure that the .env file is properly configured.

6. Run the project
Finally, to run the server in development mode, use the following command:

npm run dev