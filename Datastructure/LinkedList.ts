class MyNode {
    
    data:number
    next:MyNode | null
    
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class MyLinkedList {
    
    head: MyNode
    
    constructor() {

    }

    get(index: number): number {
        let node = this.head
        let count = 0
        
        while (count !== index) {
            node = node.next
            count++
        }
        
        return node.data   
    }

    addAtHead(val: number): void {
        let newNode = new MyNode(val)
        this.head = newNode
    }

    addAtTail(val: number): void {
        let node = this.head
        
        while(node.next !== null) {
            node = node.next
        }

        const newNode = new MyNode(val)
        node.next = newNode
    }

    addAtIndex(index: number, val: number): void {
        let currentNode = this.head
        let count = 0
        
        while(count !== index -1) {
            currentNode = currentNode.next
            count ++
        }

        const newNode = new MyNode(val)
        const nextNode = currentNode.next
        
        currentNode.next = newNode
        newNode.next = nextNode
    }

    deleteAtIndex(index: number): void {
        let currentNode = this.head
        let count = 0
        
        while(count !== index -1) {
            currentNode = currentNode.next
            count ++
        }

        const newNextNode = currentNode.next.next
        
        currentNode.next = newNextNode
    }
}

var obj = new MyLinkedList()

obj.addAtHead(1)
obj.addAtTail(3)
obj.addAtIndex(1,2)
var param_1 = obj.get(1)
obj.deleteAtIndex(1)
var param_2 = obj.get(1)
console.log('param_1', param_1)
console.log('param_2', param_2)