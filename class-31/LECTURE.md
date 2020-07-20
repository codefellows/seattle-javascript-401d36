# Class 31

## Warm Up / Review

- Ashley: Getting an individual item in a list to update.
  - Should one list item be its own component?
  - Jacob: yes and no :P, It depends

- Paul: Why React?
  - What problems does React solve that things like EJS, Handlebars.
  - Developing at scale, is probably oging to be smoother with API similar to Reacts.
    - Component Architecure combing busniess and view logic in a module.
    - This is really nice, because we can add funcitonality really easily with a consistent syntax.
    - Embedded server side, so you need a server side framework, like Express.
    - Better Application Architecture.
  - One of the biggest mistakes that startups is jumping straight to React. A smaller templating libary would work just fine.

### React / Hashmap Review

- What is React?
  - Paul: JS Framework, for standardizing web components for state driven web applications.
- What is a React Component?
  - Ashley: a template that can be reused for using the same UI structure but with different data.
    - class of thing, that encapsulates methods, and state.
  - Something that returns / renders JSX ( React specific ).
- What is state and props?
  - Marlene: state is what the component cares about, props are info passed from the parent to the child.
    - Paul: component sets its own state.
    - Jacob: props are not directly controlled by the component in which they are used.
- What is 1 way data binding?
  - Dave: React uses one way communication, everything trickles down.  This refers to the way, 'this' binds data and the flow of data from the parent into the child.
- What is component Routing?
  - Garhett: Uses a "router" to set paths, different paths render you differnet components / views.
    - Jacob: Single page apps load faster than requesting a whole new HTML. Big performance boost for "load times".

### Build a small authentication App

- 2 Routes
  - App contains some links that link to both components.
  - Auth Route '/auth'
    - Renders a form, that prompts for auth credentials and then can save them into App state.
  - User Info route '/user'
    - Renders the user data submitted in the auth form.
    - This route will redirect back to the auth form, if no user credentials are present.

## React Component Syntax

## Hooks API
