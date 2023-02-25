# Movies Catalog!

## Description
This website has been developed with React.js using Redux library and Typescript language.
This webpage allows the user to see a movies catalog. One can interact with it by liking, disliking, deleting and filterting by movie categories.

## Deployed App on Github pages
https://luluvann.github.io/react-typescript-redux/

## User Story
````
AS a cinephile, I'd like to be able to see a catalog of movies and be able to interact with it

````

## Acceptance Criteria
```
GIVEN a web platform
WHEN I visit the application, I am presented with catalog of movies. I am able to see each movie in a card with the title as well as its category
WHEN I click on the x button in a movie card, the movie will be permanently removed from the catalog (unless I refresh the page)
WHEN I click on the thumbs up or thumbs down buttons, the respective count of likes or dislikes on a movie will increase
WHEN I interact with the multi select dropdown on the top of the page, I am able to filter the movies catalog by movie category
When I interact with the paginator on the page footer, I am able to select the number of movies I wish to display on a page (either 4, 8 or 20) and I'm able to navigate between the pages if there are many
```

## Technologies
Front-end libraries
- React.js
- Redux


## Save project to local
1. Git clone the repo in the desired local folder SSH
````
git clone git@github.com:luluvann/react-typescript-redux.git
````
2. Cd to the root folder of the project and install all the dependencies (client and server side)
````
npm install
````

## Usage
1. Cd to the root folder and start the project
````
npm run start
````
2. The client should automatically open at http://localhost:3000