# Class 32

## Warm Up

- Let's spend some time on the code challenge!!
  - `Without utilizing any of the built-in library methods available to your language, return the first word to occur more than once in that provided string`.
    - based on smaple output, the first duplicated is prefered.
    - Get down something that works ( as an algorithm ).
      - Steps to reach a solution as quick as you can.
  - Make sure you have a sample output and a sample input!
  - Ask questions, really stupid questions ( make zero assumtions ).
  - Hashmaps?
  - Repeated Word:
    - param: string
    - return: the word that is the first to be a duplicate.
      - punctuation might be hard for this function.
      - string.match(//)
  - What does it mean to the be first word to be repeated?

```java

ALGORITHM

- store words in an array!
  - make sure words are lowerCase?
  - make sure there is no punctuation.
- create another array that stores previously seen words to compare.

('Once upon a time, there was a brave princess who...') = > ['Once', 'upon', 'a', 'time,', 'there', '...' ]

- iterate through the array
  - check as we iterate if a word has been duplicated.
  - WordsArray => nested for loop through.
['this'] => ['is', 'is', 'string'] => 'no duplicates';
['is'] => ['this', 'is', 'string'] => 'no duplicates';

Step PsuedoCode

- Repeated Word takes in a string called string:
  - words array = string turned into an array.
  - for each word in words array:
    - comparison word = word
    - for each other word in words array:
      - does comparison equal other word.
      - if so so return comparison word
```

- Solution

```js

function findFirstRepeatedWord(string) {

  // store words in an array
    // string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    // string.replace(/\S/g);
  let words = string.match(/\w\S/g); // I think this returns an array
  let comparisons = {};

  for (let i = 0; i < words.length; i++ ) {
    let word = words[i];
    // add word to comparison array.
    // comparison => {};

    // word => 'this';
    // word => 'is';
    if (comparisons[word] === 'found') {
      return word;
    } else {
      comparisons[word] = 'found';
      // comparisons => {'this': 'found'}
      // comparisons => {'is': 'found'}
    }
    // for (let j = 0; j < comparisons.length; j) {
    //   if (comparisons[j] === words[i]) {
    //     return words[i];
    //   } else {
    //     comparisons.push(words[i]);
    //   }
    // }
  }

}

```

## Code Review

- Paul: why, is this better than making a class?
  - Jacob: Facebook would like you to think that there is a small performance boost.
  - Opinion: This API is a little more maintainable for developers ( speccifically facebook ), because everything is just a function. functions are a built in thing, classes are syntactic sugar for a special type of function.
  - It's nice to not have a "this".
  - Less jargon overall, which leads to more readable code => more maintable code => easier test writing.

```js

// The API has changed a lot, and might change even more.
const List = React.createElement({});

```

- Turning Classes into Hooks!

## Custom Hooks

- Component functionality that is shareable.
  - multiple components might need to do form like stuff:
    - handleInputs
    - handleSubmits
    - handleClick
    - inputValues
  - Why not make these things ( functionality ) exportable
  - Hooks allow us to make our ways in which we can share React functions.
    - In hook logic we just have to tell React which features we are using ( useState, useEffect );
- Uses prebuilt react hooks, wrapped around it's own functionality to export to other components!

### Rules and Conventions for Custom Hooks

- Must use a react API feature ( useState, useEffect ), these need to connect of functionality to React events.
- Have to be called within a react function (not in a class), doesn't work outside.
- Name should start with use. THis is so we have a consistent naming pattern.
- Should be used at the top most context ( no loops, dont call inside of a JSX / okay to define).

## Use Form Hook

```js

import React, { useState } from 'react';

// takes in a callback to use when we want to submit our form
const useForm = (callback) => {

  // these are our form values that we'll use in other componenets
  const [ values, setValues ] = useState({});


  // 2 form function":

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    callback(values);
  }

  const handleChange = (event) => {
    event.preventDefault();
    //event = {} => propertiese set by the DOM
    // event.targe => the element that the event was performed against <button onClick={handleChange} name="usename" value="Jacob">

    setValues({...values, [event.target.name]: event.target.value });
  }

  // not returning JSX, but other fucntionality that we define above.
  return [
    // place getters and setter here
    values,
    handleChange,
    handleSubmit,
  ];
}

export default useForm;

```

- We can use this to call an API
  - `const [response, callAPI] = useAPI('http://some-api');`
  - formatting data that is always ugly.
