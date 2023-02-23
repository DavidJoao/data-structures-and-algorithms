class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

const nodeOne = new Node(100)
const nodeTwo = new Node(200)
const nodeThree = new Node(300)

class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    //Insert First Node
    insertFirst = (data) => {
        this.head = new Node(data, this.head)
    }
    //Insert Last Node
    insertLast = (data) => {
        this.next = new Node(data, this.next)
    }
    //Insert at a specific index

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
