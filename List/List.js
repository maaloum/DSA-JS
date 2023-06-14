class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }

}


class LinkedList {
    constructor(head = null) {
        this.head = head;
        this.tail = null;
        this.length =0;
    }

    // push
    push = (val) => {
            // create new node and add  val
            let newNode = new Node(val);
            if(!this.head){
                this.head = newNode;
                this.tail = newNode;
            }else{
                this.tail.next = newNode;
                this.tail = newNode;
            }
            this.length++;
            return this;
    }

    // create size function
    size = () => {
        let node = this.head;
        while(node){
            this.length++;
            node = node.next;
        }

        return this.length;
    }

    // clear
    clear = () => {
        return this.head = null;
    }

    // getLast Node 
    getLast = () => {
        let lastNode = this.head;
        console.log(lastNode)
        if(lastNode){
            while(lastNode.next){
                lastNode = lastNode.next

        }
    }
    return lastNode; 
}
    // getFirst Node
    getFirst = () => {
        let firstNode = this.head;
        return firstNode;
    }

}


// definifing two nodes
n1 = new Node(5)
n2 = new Node (59);
n3 = new Node(52);

n1.next = n2;
n2.next = n3;
let list = new LinkedList();
list.push(3)
console.log( list);
// console.log( list.getLast());
// console.log( list.getFirst());
