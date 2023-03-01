function LinkedList(){
    let head = null;
    let length = 0;

    const Node = function(element){
        this.element = element;
        this.next = null;
    }

    this.size = function(){
        return length;
    }

    this.head = function(){
        return head;
    }

    this.add = function(){
        let node = new Node(element)

        if(head === null){
            head = node;
        } else {
            let currentNode = head;

            while (currentNode.next){
                currentNode = currentNode.next
            }
            currentNode.next = node;
        }

        length++;
    }

    

}