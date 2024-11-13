class Node {
  constructor(value, next = null){
    this.value = value;
    this.next = next;  
  }
}
class LinkedList {
  constructor(){
    this.head = null;
  }
  
  add (value){
    if (this.head === null){
      this.head = new Node(value);
      return;  
    }

    let current = this.head;
    while(current.next !== null){
      current = current.next;
    } 
    current.next = new Node(value);
  }   
 prepend(value){
  if (this.head === null){
    this.head = new Node(value);
    return;
  } 
  let newNode = new Node(value, this.head);
    this.head = newNode;
  }
search(value){
    let current = this.head;
    while(current !== null){
      if (current.value === value) {
        return current;
      }
      current = current.next;
    }
    return null;
  }
delete(value){
  if (this.head === null){
    return;
  } 
  if (this.head.value === value) {
    this.head = this.head.next;
    return;
    
  }
  let current = this.head;
    while(current.next !== null){
      if (current.next.value === value) {
        current.next = current.next.next;
        return;
      }
      current = current.next;
    }
  }
}

const linkedList = new LinkedList();
console.log(linkedList);
linkedList.add(1);
console.log(linkedList);
linkedList.prepend(2);
console.log(linkedList);
console.log(linkedList.search(1));
console.log(linkedList.search(5));
linkedList.delete(1);
console.log(linkedList.search(1));
