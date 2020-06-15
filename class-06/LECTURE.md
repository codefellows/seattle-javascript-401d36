# Class 06: Rest and HTTP

## Feedback
- Lectures are going long:
  - Not enough time left to engage with instructional staff.
- Spending a little too much time in code review:
  - Let's not go past 11:00.
- Not enough time with in the instructional staff.
  - Keeping extra lecture time ( afternoon workshops ) to minimize.
- Lecture notes are hard to follow:
  - Notes here are meant to be a litle informal
  - I'll work on exectations here.
- Appreciating the pace!!
- Can we change Javascript?

## Linked Lists / Questions about Node and Node Modules?

- Implementing a Linked List in JS
  - Conceptualizing the List.
  - Concepts easy for some, traversing technically is tricky.

```js

insert()

toString() {

}

// takes in a value and returns a boolean
includes(value) {
// Dave: returning at the right is tricky.

  let current = this.head;
  let valid = false;

  while (current) {
    if (current.value === value) {
      valid = true;
      break;
    } else {
      current = current.next;
    }
  }

  // Most often we want to return at the end, when is this not true.
  //  In recusion you will most likely have multiple returns.
  return valid;
}

### Week One  Notesy

- Dave: Deployment via NPM
  - JSDoc: is a little applicable here, but more on that this week.
    - More helpful for REST API.
    - This a library that takes comments formatted in a specific way and turns them into documentation for us. 
  - This should be a stretch goal

const list = new Linkedlist();
list.head = new Node(3);

list.includes(3) // true;

```

```js

    const getRequest = new Request({ url: 'https://google.com', method: 'get' });

    // request.js
      /*

      class Request {

        constructor(options) {
          Object.keys(options); // ["url", "method"] if null we know we passed an something unexpected;

        }
      }

      */

    getRequest.fetch()
      .then(response => {
        expect(response).toBeTruthy();
        done();
      });
```

- garhett: Missing an explaination of Linked list
  - Russian Nesting Doll, great analogy.

## Last Week:
- We built a command interface, that performed CRUD.
  - Contained all the logic for when to Create / Read / Delete
  - This is consider Full Stack -> we built all the "front-end" and back-end.

- This week we are focused on a more distributed system architecture.
  - Our code this week will be back-end focused, but it fits into a larger distributed system.

- JAM / MEAN / MERN Stack?
  - Accromnyms, all of them describe the main technologies of a distributed system.
  - We are working in the MERN stack (Mongo, Express, React, Node).
    - Mongo will handle all data related things
    - Express will handle all REST related things
    - React will handle all View ( User Interface ) related things
    - Node will handle all infrastructure / utility  related things.

- MEAN: same thing but with Angular
- JAM: Serverless - builds views using Javascript / APIs / Markup ( yaml, markdown, json ).
- This whole we are focues on E-express.
  - What infratstucture tech makes express do what is does does best: build an API.
    - HTTP and REST.

## HTTP

- Hyper Text Transfer Protocol: stateless set of verbs and nouns that power communication between machines.
  - Computers require rigourous requirements to talk to each other, a communication method.
  - Statelessness: any communication (request) that happens on our API contains all the information our system needs to properly respond.
  - Anatomy:
    - Client: any machines that wants to communicate.
    - Server: the machine that response to Client interaction, handles primary tasks associated with our web service.
    - Proxy: Any machine that is sitting between Client and Server.
      - examples: Authentication, database validation, DNS configuration, logging services.
  - Is our top most layer of the OSI model that our APIs will interface.
  - Anthing that can specify to another machine what it needs to to ( CRUD, authentication, cacheing ) is within the realm of HTTP.
    - Verbs: GET / POST / PUT  / DELETE
    - Nouns / subject : http://my-api/my-route
    - adjectives:
      - header { Content-Type: application/json }
      - body: { data goes here }
  - uses REQUEST object, and RESPONSE objects, every HTTP action includes these.

## ReST over HTTP

- Representational State Transfer
  - Request contains the state that we wish to transfer from the backend.
- Prescribes way that we want to fit these commincation features togther.
- Agreed set of standards, that if used correctly always return something we expect.
- what types of things can we do with 'GET'
  - REST says that we can only READ things made from a http GET method.
  - likewise: POST is always going to CREATE something.
- Verbs is REST
  - GET: Read data from an resource
  - POST: Create data for a resource
  - PUT: Replace an existing piece of data, with a new piece.
  - PATCH: Replace a small chunk for some existing.
  - DELETE: Delete remove a whole piece of data.
- How do we specify a subject
  - http://my-api/potatoe
  - URL must end in a resource to perfrom our method / verb.
- URLs for different end goals:
  - http://my-api/potatoe/yukon/_id
  - configure urls using identity parameters.
  - starting with general resource, each forward should drill down to a mjore specific location.
  - query parameter ( ?key=value ), aren't particularly restful, because they are un-standardized.
  - Route parameter: /resource-name/:parameter.
  - Drills down like a file structure.
  - Help maintain and scale our system.

## json-server & Swagger

- How are we going to witness rest is action : json-server
- json-server a library for creating proof oc concepts / prototype web services that want to be ReSTfull.