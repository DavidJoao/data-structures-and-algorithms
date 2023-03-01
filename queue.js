let Queue = function(){
    this.items = [];

    this.enqueue = function(item){
        console.log(`${item} added to Queue`)
        this.items.push(item)
    }

    this.dequeue = function (){
        console.log(`${this.items[0]} removed from Queue`)
        this.items.shift()
    }

    this.size = function(){

    }

    this.front = function(){

    }

    this.isEmpty = function(){

    }

    this.print = function(){

    }
}

let newQueue = new Queue()

newQueue.enqueue(100)
newQueue.dequeue()