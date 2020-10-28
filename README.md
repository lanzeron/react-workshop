This repository was made for testing purpose.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Start the project

To run the project locally run `yarn && yarn start` command in the project directory
Then go to [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### What you need to do

The idea of our workshop is to try different state management tools combined with React. <br />
The main goal is to understand for which purpose which tool is the best. <br />

We have prepared for you several statements, and we want you to think about them during the implementation of the task. <br />
In the end you will have around 5 mins for a short presentation from your team with short talk throw those statements, so the main goal its not a success realization of the task, but understanding the proc and cons regarding your tool. <br />

<h4 /> Here is a statements: 

- performance (what do you think about performance of the app using this tool).
- scalability (is it easy to scale the project using this tool).
- maintenance (is it easy to navigate throw the project, understand the file structure etc).
- tool complexity (is it easy to start with this tool without previous experience).
- the stronger side of this tool.

<h4 /> Project task

We need to build the map of Ukraine with the numbers of cases regarding Covid 19 by regions. <br />
Here you can see [the example](https://covid19.rnbo.gov.ua/). <br />
We have prepared ready React application with all needed layouts, npm packages including needed state management tool.
All you need is to use provided URL and using defined state management tool implement needed calls, and display the data within prepared layout. <br />

<h4 /> Project structure

Under the `src` folder you can find:

- `api` folder where you actually can find needed URL
- `components` here you can see the `map` component, `markerItem` component, here you need to put the data for each region
and the `App` as a main component.
