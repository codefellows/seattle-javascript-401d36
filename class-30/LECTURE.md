# Class 30 Hash Maps / Tables

## What is a Hash Table

- A data structure that utilzes encoded key value pairs.
- An array of `buckets` that are assigned "keys" or "Key:vales" which is encoded.
  - The encoding is deterministic, if you `hash` a key you will always the same value.
- A hash table is everything a hash map is, plus being asynchronously accessible. The values are in order. Slower.
- Hashed key value pairs, are placed into buckets.

## Why

- Fast look up time, for a very large amount of things. Sacrifice space.
  - Library.
  - Dictionary.
  - School 100,000s of faculty.
    - Hash names into a key.

```js

let map = new Map(); // native js hash map.

```

## Terminology

- Hash: encoding a key, that points place in the data structure. Usually returns an integer.
  - cryptographic hash is one that goes one way.
- Buckets / Map: An indexed list of encoded key value pairs.
- Collisions:  When a new item is added to a bucket, and the hashed key is in the same position as another item.
  - In order to avoid collisions, we use a linked list.

## Hashing

- The act of creating a hash, through a hashing function, turns a key into an integer. This integer represents a location within the data structure.
  - We're going to use an array, so the integer that we produce will be an index in an array. This means we'll create an array with a specific size.
  - We want to think of each position as a bucket.

- Our hashing function
  - add or multiply the ascii value of each character | "Jacob" => 74 + 97 + 99 + 111 + 98 = 479
  - Multiply by some prime number | 479 * 599 => 286921
  - Use modulo, against the number of our `buckets` 286921 % 1024 => 201
  - the resulting is the position within our buckets.
    - Right now we are not handling collisions.
  - If we make every bucket, a linked list, we can now handle collisions gracefully.
  - Now both, key and value are store in the linked list value'.

## Implementation

- 4 main functions of a hashmap
  - hash, does the math to turn a key into an integer that represents an index.
  - add, takes in a key value pair, creates a hash from the key and places a value in the hashIndex.
  - find, a function that returns a value using a key.  
  - contains, returns a boolean that tells us whether or not a value exists at a given key.

```java

STRUCTURE HashMap

  PROPERTY Size = 1024
  PROPERTY Buckets = New ARRAY(1024)

  ALGORITHM Hash (STRING KEY)

    FIND Value for CHAR in KEY
      TOTAL += Value
    TOTAL = TOTAL * 599
    RETURN TOTAL % THIS.Size

  ALGORITHM Add (STRING key, any value)

    INT HASH = THIS.hash(key);
    IF THIS.Buckets[HASH] is NULL;
      THIS.Buckets[HASH] = NEW LinkedList();
    OBJECT = [key, value]
    SET THIS.Buckets[HASH].add(OBJECT);


```