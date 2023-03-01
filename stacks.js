let Stack = function(){
    this.count = 0;
    this.items = []

    this.push = function(element){
        this.items[this.count] = element
        this.count++;
        console.log(`${element} pushed to Stack`)
    }

}

let myStack = new Stack
myStack.push(100)