# Solution to the Paper Sales Company Customer Interaction App

` ****Note: This project created for a software development interview***`
## The Task

My task for this homework assignment was to complete writing the web app for the _Paper Sales Company_. This web app would allow PSC sales agents to complete interactions with their customers.

## My Solution & Challenges:

I broke my solution in to a couple of different parts. I like to complete and understand everything that's coming from the API first before I start on the Front-end. This helps me to create the correct API calls right from the beginning so that the rest of my time is used in building the UI.

1. Review server

   - I read through the server.js to understand the models, what they contained and what data the routes were sending to the client.
   - Then I noticed that the add note route would need to be implemented and I took a note of where it would need to go and what it would need to contain.
   - I created the 'addNote' route and made sure it added a new note object to the notes array under an interaction.

2. Create State and Api Calls

   - The next step I took was creating all the global state I knew I would need for the application. I decided to use the built in hook useReducer as a base for this.
   - I then created my own thunkReducer hook which would allow me to make async calls much easier and keep everything inside my store.
   - Then I created context and a context hook so that I could easily provide the entire application with global state without having to prop drill.

3. Create base components

   - When I first looked at the app, I noticed there were many of the same elements being used. With that thought in mind I wanted to ensure I created base components that could be reused for each view. This would speed up development time. I decided to create:
     - Card - which would be a compound component with a Title, Body, and Text which would be the base for the interaction, message and note.
     - Button - for the buttons
     - TextArea/Input - Would need these to allow the user to input a message to the customer or create a note
     - Header - will contain our title
     - Modal - another compound component that would be the basis for allow agents to respond to customers and create notes

4. Implement interactivity

   - The next challenge was to make the app interactive. The first piece of this was when an Agent clicks an interaction. The color should change and they should see the messages and notes that belong to that interaction.
   - The second piece was the 'Respond to customer' and 'Add note' buttons. When a Agent clicked a button it should allow them to respond to the customer. Since the requirements did not specify how this should happen I felt it would be appropriate to create a modal window popup that allowed the Agent to enter whatever message they would like.
   - A challenge presented itself here though. Since I had to assume that the Agent that was currently interacting with the customer is the one that would be responding and I added their AgentId to the display. A better way to handle this would be to dynamically change the AgentId based on the Agent who is logged in. Since there is no log in to this app, I went with what I could get my hands on which was pulled from the message of the interaction.

5. Separate and Dockerize

   - since the documentation recommended to dockerize the application I decided to separate Api and UI into different folders so that I could create a DockerFile for each. This allowed me to use docker-compose to build and run both of them.

6. Create some tests

   - Finally, I thought it would be good to have some tests to ensure the application does what it's supposed to do. I decided to go with cypress since it's a pretty great end-to-end testing framework.
   - I tested the main functionality of the application to ensure it worked.

## How to run the application:

You can run this application in two ways:

1. In a docker container

   - To run this application in docker, go to the root of the application and run `docker-compose up --build`
   - This will build and run both the server and the ui in docker containers.
   - After they have been built, go to `http://localhost:3000` to see the app running.
   - To stop the containers you can run the following command: `docker stop $(docker ps -aq)` This will stop all containers running.

2. Locally

   - To run this application locally, from the root directory change into the api folder and run `npm start`. This will start the server.
   - Then, change directory into the ui folder and run `npm start`. This will start webpack-dev-server and will allow you to view the page at `http://localhost:3000`

## To Test This application

There are not many tests on this application due to the time constraints but the ones that exist test the main functionality of the application.

- To run the tests for this application change directory into the ui folder and run `npm test` or `npm t`. Cypress will open in a window. Click on the `pscTests` file to run the tests, or you can click `run all specs` in the upper right hand corner of the cypress window.
