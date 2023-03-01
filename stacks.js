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
        delete this.items[this.count]
        this.count--;
    }
}

let myStack = new Stack
myStack.push(100)
myStack.push(300)
myStack.pop()