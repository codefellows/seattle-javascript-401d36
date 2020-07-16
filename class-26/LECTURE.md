# Class 26

## Component Based UIs

- Think about each element as part of a group of elements.
- We want to think of our view as a single page / not concerned with loading new HTML.
  - Manipulate existing markup / content instead.

```html

<form id="form">
 <h1> </h1>
 <input> </input>
 <div> </div>
</form>

```

- This group of elements has one job, and as long as it can do that job in and around other components, are component is successful.
- Atomic components: broken down to it's most minimalist form.
  - Component contains only the things that it needs to work.
  - Allows for a "tree" like organization of components.

## Sass

- Stylelistically Awesome Style Sheets
- Looks a lot like css, but with some main syntax add-ons.
  - nesting style blocks
- Not a native browser styling langauge => pre-processor / compiler
  - something reads a SASS file, and outputs the equevalent styling specs as CSS.

```css

div {
  background-color: blue;
}

div h1 {
  background-color: grey;
}

div p {
  background-color: yellow;
}
/* This could be a long list of blocks */
```

```scss
// sass file for importing _variables.scss

$paragraphColor: #nf872b;
$headingColor: #fbf636;

```

```scss

@import './_variables.scss';
$divBlue: #hdu773;
%divStyles {
  height: 300px;
  width: 400px;
}

div {
  background-color: $divBlue;
  @extend %divStyles;

  h1 {
    background-color: grey;
  }

  p {
    background-color: $paragraphColor;
  }

  section {
    background-color: $divBlue;
    @extend %divStyles;
  }
}

```

## React Framework

- Libraries Vs Frameworks
  - Library is a bunch of code, that can be used in any way you see fit.
  - Framework, often includes a library, but is more of a workflow for achieving a desired outcome.
