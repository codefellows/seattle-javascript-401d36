
/**
 * ALGORITHM
 * 
 *  - Traverse both lists
 *  1) define variables to track current position (of 3 things)
 *      - position of list1, list2, and output
 *
 *  - Put values of lists into there own array.
 *   2) Grab value of list1 and push to array1
 *   3) Grab value of list2 and push to array2
 * 
 *  - Use output array to zip value together
 *  4) loop through array1 and push to output
 *    5) also push index value of array2 to output
 *  6) loop iterates and we push next iteration index
 * 
 *  - create a new linked list from the output
 *  7) Create new LinkedList
 *  8) loop through output array and append to linkedlist
 * 
 *  - return linkedlist.head;
 */

/**
 * ALGORITHM 2
 * 
 *   - define values we need to track
 *   1) position of list1, list2, and new output LinkedList
 *   2) set head of output LinkedList to list1.head.
 * 
 *   - We'll need tp traverse at some point
 *    3) set list1 to list1.head.next;
 *    4) set current to output.head;
 *    6) loop through based on list1 and list2 not beeing null
 * 
 *  - Swapping values within traversal
 *  7) move current.next to list2.head;
 *  8) set current now to the next node (current.next);
 *  9) list2.head = list2.head.next
 *  10) repeat steps for list1
 * 
 */

/**
 * 
 * - Assigning new variables to reference node and create new LinkedList
 * 1) node1, node2, linkedList
 * 
 * - Traverse both lists (while loop while node1 && node2) and assign values to new LinkedList
 * 2) LinkedList.append(node1.value)
 * 3) LinkedList.append(node2.valu3)
 * 4) node1 = node1.next
 * 5) node2 = node2.next
 * 
 * - return LinkedList.head when traversal is done
 * 
 * O(n) space
 */


function mergeLists(l1, l2) {
  let node1 = l1.head;
  let node2 = l2.head;
  let result = new LinkedList();
  let dummy = new Node();

  let temp = dummy;
  while (true) {

    if (!node1) {
      temp.next = node2;
      break;
    }
    if (!node2) {
      temp.next = node1;
      break;
    }

    temp.next = node1;
    node1 = node1.next;
    temp = temp.next;

    temp.next = node2
    node2 = node2.next;
    temp = temp.next;
  }

  return result.head;
}

/**
 * Testing
 * 
 * new linkedList().append(1).append(2).append(3)
 * 
 */

let test = new LinkedList();
test.head = new Node(1);
test.head.next = new Node(3);

let test2 = new LinkedList();
test2.head = (2);

let expected = new LinkedList();
expected.head = new Node(1);
expected.head.next = new Node(2);
expected.head.next.next = new Node(3);

console.log('Testing passing :' + (mergeLists(test, test2) == expected));