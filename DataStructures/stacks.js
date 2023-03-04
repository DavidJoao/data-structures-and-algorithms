let Stack = function(){
    this.count = 0;
    this.items = []

    this.push = function(element){
        this.items[this.count] = element
        this.count++;
        console.log(`${element} pushed to Stack`)
    }

    this.pop = function(){
        console.log(`${this.items[this.count - 1]} deleted from Stack`)
        delete this.items[this.count - 1]
        this.count--;
    }

    this.peek = function(){
        console.log(this.items[this.count - 1])
        return this.items[this.count]
    }

    this.list = function(){
        for(let i = 0; i < this.items.length; i++){
            console.log(this.items[i])
        }
    }

    this.length = function(){
        let stackLength = this.items.length
        console.log(stackLength)
        return stackLength
    }
}

let myStack = new Stack

myStack.push(100)
myStack.push(100)
myStack.push(100)
myStack.push(100)
myStack.push(100)
myStack.push(100)

myStack.length()