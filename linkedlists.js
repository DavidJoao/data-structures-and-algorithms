class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    //Insert First Node
    insertFirst = (data) => {
        this.head = new Node(data, this.head)
        this.size++;
    }
    //Insert Last Node
    insertLast = (data) => {
        let node = new Node(data);
        let current;

        if(!this.head){
            this.head = node;
        } else {
            current = this.head;
            while(current.next){
                current = current.next
            }
            current.next = node;
        }
        this.size++; 
    }
    //Insert at a specific index

    insertAt(data, index){
        // Returns if index is greater than size
        if(index > 0 && index > this.size){
            return;
        } 

        if (index == 0) {
            this.insertFirst(data)
        }

        const node = new Node(data);
        let current, prev;
        current = this.head;
        let count = 0;
        while(count < index){
            prev = current;
            count++;
            current = current.next;
        }

        node.next = current;
        prev.next = node;

        this.size++;
    }

    //Get at specific index

    //Remove specific node by index

    //Clear the list

    //Print all list data
    printListData = () => {
        let current = this.head

        while(current){
            console.log(current.data)
            current = current.next
        }
    }
}

const myLinkedList = new LinkedList();

myLinkedList.insertFirst(100)
myLinkedList.insertLast(300)
myLinkedList.printListData()
