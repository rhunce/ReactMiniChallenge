# ReactMiniChallenge

Fill in the the incomplete files to complete a React app that displays random animal facts. Follow the errors in your browser, and make the tests pass complete this app. You'll be working in the following files:

- App.jsx
- FactsList.jsx
- Fact.jsx

## Requirements

| ORDER | DESCRIPTION                                                                                                                                                     |
| ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1     | Create a class component, App, in the App.jsx file which holds the animal facts (from data.jsx file) in state                                                   |
| 2     | Pass the animal facts down from the App component to the FactsList component                                                                                    |
| 3     | In FactsList.jsx, dynamically render the data HINT: use the map method to render each item in the data array to a Fact component                                |
| 4     | Fill in the Fact component with the data that's been passed down through props. Consider what data type a single item from the animalFacts array in data.jsx is |
| 5     | Create an event handler function in App.js to handle ...                                                                                                        |
| 6     | deletes a pet record based on req.params.id                                                                                                                     |

## Demo

![Nov-23-2020 15-49-59](https://user-images.githubusercontent.com/65248215/100019400-95bc5900-2da3-11eb-8865-06eb6d03da94.gif)

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
  </tr>
</table>
