class Stack {
    constructor(){
        this.items = []
        this.count = 0
    }

    push(element){
        this.items[this.count] = element;
        console.log(`${element} added to ${this.count}`) 
        this.count += 1;
        
        return this.count - 1;
    }

    pop(){
        //Should remove and return top element of stack
        //Return undefined if stack is empty
        if(this.count == 0) return undefined
        let deletedItem = this.items[this.count - 1]
        console.log(`${deletedItem} removed`)
        this.count -= 1;
        return deletedItem;

    }

    peek(){
        let topElement = this.items[this.count - 1]
        console.log(`Top element is ${topElement}`);
        return topElement;
    }

    isEmpty(){
        console.log(this.items.length == 0);
        return this.items.length == 0
    }

    size(){
        console.log(this.count);
        return this.count
    }

    print(){
        for(let i = 0; i < this.items.length; i++){
            console.log(this.items[i])
        }
    }
}

const stack = new Stack()

stack.push(100)
stack.push(200)
stack.push(300)
stack.pop()
stack.print()