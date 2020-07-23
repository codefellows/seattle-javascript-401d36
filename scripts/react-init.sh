#!/bin/bash

if [ $1 ]
then
  echo "****8 \n   Creating project directory\n*****"
  mkdir $1
  cd $1
else
  echo "***** \n    No directory specified, adding project files to CWD\n*****"
fi

npm init -y
ex -s -c '7i|    "deploy": "gh-pages -d build",' -c x package.json
ex -s -c '7i|    "predeploy": "npm run build",' -c x package.json
ex -s -c '7i|    "build": "react-scripts build",' -c x package.json
ex -s -c '7i|    "test": "react-scripts test --env=jsdom",' -c x package.json
ex -s -c '7i|    "start": "react-scripts start",' -c x package.json

mkdir src
touch src/index.js
echo "import React from 'react';" >> src/index.js
echo "import ReactDOM from 'react-dom';" >> src/index.js
echo "" >> src/index.js
echo "const App = () => {" >> src/index.js
echo "  return <h1>My React App!!</h1>;" >> src/index.js
echo "};" >> src/index.js
echo "" >> src/index.js
echo "const root = document.getElementById('root');" >> src/index.js
echo "ReactDOM.render(<App />, root);" >> src/index.js

mkdir public
touch public/index.html
echo "<!DOCTYPE html>" >> public/index.html
echo "<html lang=\"en\">" >> public/index.html
echo "" >> public/index.html
echo "<head>" >> public/index.html
echo "  <meta charset=\"UTF-8\">" >> public/index.html
echo "  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">" >> public/index.html
echo "  <meta http-equiv=\"X-UA-Compatible\" content=\"ie-edge\">" >> public/index.html
echo "  <title>React Project</title>" >> public/index.html
echo "</head>" >> public/index.html
echo "" >> public/index.html
echo "<body>" >> public/index.html
echo "  <div id=\"root\"></div>" >> public/index.html
echo "</body>" >> public/index.html
echo "" >> public/index.html
echo "</html>" >> public/index.html

touch .gitignore
echo "# Node React gitignore" >> .gitignore
echo "" >> .gitignore
echo "node_modules/" >> .gitignore
echo "npm-debug.log*" >> .gitignore
echo ".npm" >> .gitignore
echo ".env" >> .gitignore
echo ".idea/" >> .gitignore
echo "build/" >> .gitignore

touch README.md 

npm install --save react react-scripts react-dom node-sass 
npm install --save-dev eslint-plugin-react enzyme enzyme-adapter-react-16 react-test-renderer
