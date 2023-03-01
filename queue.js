let Queue = function(){
    this.items = [];

    this.enqueue = function(item){
        console.log(`${item} added to Queue`)
        return this.items.push(item)
    }

    this.dequeue = function (){
        console.log(`${this.items[0]} removed from Queue`)
        return this.items.shift()
    }

    this.size = function(){
        console.log(`Queue size: ${this.items.length}`)
        return this.items.length
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
newQueue.enqueue(100)
newQueue.enqueue(100)
newQueue.dequeue()
newQueue.size()