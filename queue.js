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
        console.log(`Top element in Queue: ${this.items[0]}`)
        return this.items[0]
    }

    this.isEmpty = function(){
        console.log(this.items.length === 0)
        return this.items.length === 0;
    }

    this.print = function(){

    }
}

let newQueue = new Queue()

newQueue.enqueue(100)
newQueue.enqueue(100)
newQueue.enqueue(100)
newQueue.dequeue()
newQueue.enqueue(300)
newQueue.size()
newQueue.front()
newQueue.isEmpty()