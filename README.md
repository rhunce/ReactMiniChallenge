# ReactMiniChallenge

Fill in the the incomplete files to complete a React app that displays random animal facts. Follow the errors in your browser, and make the tests pass complete this app. You'll be working in the following files:

- App.jsx
- FactsList.jsx
- Fact.jsx

## Requirements

It is reccomended to complete the requirements in an order similar to the outline below:

| ORDER | DESCRIPTION                                                                                                                                                     |
| ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1     | Create a class component, App, in the App.jsx file which holds the animal facts (from data.jsx file) in state                                                   |
| 2     | Pass the animal facts down from the App component to the FactsList component                                                                                    |
| TIP   | Use chrome dev tools for React to check the values of state and props in each component as you work through this challenge...or console.log to check            |
| 3     | In FactsList.jsx, dynamically render the data HINT: use the map method to render each item in the data array to a Fact component                                |
| 4     | Fill in the Fact component with the data that's been passed down through props. Consider what data type a single item from the animalFacts array in data.jsx is |
| 5     | Create an event handler function called handleFavoriteClick in App.jsx which updates the state of favorite with the name of the animal that is favorited        |
| TIP   | Start by just adding a console.log statemet like console.log(Clicked!) in the handleFavoriteClick function to see if you can get the function to fire           |
| 6     | Pass the handleFavoriteClick method down from the App component to the Fact component                                                                           |
| 7     | Connect handleFavoriteClick to an onClick event attached to the button in Fact.jsx. HINT: add a value property to the button and set equal to the animal name   |
| TIP   | You can console.log(e.target.value) in the handleFavoriteClick function to check if you've set the correct value for the Favorite button onClick event          |

## Demo

![Dec-03-2020 22-51-20](https://user-images.githubusercontent.com/65248215/101123300-2a9c2f00-35ba-11eb-9ef6-c2b750a43f78.gif)

### Installation

To get started:

Navigate to the project Directory

```sh
$ cd ReactMiniChallenge
```

Install the dependencies

```sh
$ npm install
```

Start the dev server

```sh
$ npm run dev-server
```

Check if tests are passing

```sh
$ npm run test
```

### Technologies

<table style="width:50%">
  <tr>
    <td><a href="https://reactjs.org/">React</a></td>
    <td><a href="http://expressjs.com">Express</a></td>
     <td><a href="https://webpack.js.org/">Webpack</a></td>
      <td><a href="https://babeljs.io/">Babel</a></td>
    <td><a href="https://jestjs.io/">Jest</a></td>
    <td><a href="https://enzymejs.github.io/enzyme/docs/api/">Enzyme</a></td>
  </tr>
</table>
