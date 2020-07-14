# Class 27: TDD and Deployment

## Warm Up

- 2 teams building 2 components
  - WordInput
    - Display some title text
    - Contain an input that allows users to change the title
  - Incrementer
    - displays a number
    - When a button is clicked, the number will increment by one.

## Code Review

- The beginning of our RESTy application
- Creating 3 components
  - Header
  - Footer
  - Form
    - Does my parent App need to handle urls, methods...
    - Or can I keep everything living within the form.
    - What issues did you have?

- Setting up our React app:
  1) npm init / npm install ( set up our node project and dependencies )
  2) Add our required directory ( react-scripts needs this )
     1) src
        1) index.js
        2) app.js
     2) public
        1) index.html
  3) Add start script to package.json: `"start" : "react-scripts start"`

```js

function myFunction() {

  console.log(this);

}

class Thing extends React.Component {
  constructor(value) {

    // 'this' refers to a class intatiated object
    this.value = value;
    this.method = this.method.bind(this);

  }

  // no binding of this in a fat arrow function
  method = () => {

    console.log(this);
  }

  method() {

    // 'this' refers to the function scope (runtime context).
    console.log(this);

  }
}

```

## TDD With React

- Introduce enzyme, which allows us to use components without rendering in the browser.
  - We have to do a little bit of configuring.
- Testing the Front end just allows some emotional handholding.
  - Peace of mind that a componet works as a unit, regradless of what other components are doing.
- Our Components should fulfill a contract!
  - What is the main purpose of our React Component
    - displaying something
    - are elements clickable
    - does state change when events occur.
    - Enzyme allows us to emulate these events and assert and expectation.

## Deployment

- old school deployment without React / and with React
  - FTP a directory, directly to a web server that you have access to.
- netlify
- amplify

### Github Pages Deployment Workshop

- Adding a deploy and pre-deploy script to our package.json
  - Make sure gh-pages is installed
- Adding a homepage to your package.json
  - You will need to add a line like this your you json: "homepage": "https://github-account.github.io/repo-name",
- Getting an access token from github
  - Github > Profile Setting > Developer Settings > Personal Access Tokens
    - Click Generate new Token
    - Select the `repo` option
    - Copy Token to clipboard
- Create a repo for your project
  - Go to settings and add a secret:
    - `PERSON_TOKEN` paste your token from github
- Add the github pages deployment action to your project
  - add [this](https://github.com/codefellows/seattle-javascript-401d36/blob/master/configs/.github/workflows/react.yml) file to your `.github/workflows` directory.
- Enable Github Pages
  - Go to your repo settings and scroll to Github Pages.  Select the `gh-pages` branch to deploy from.
