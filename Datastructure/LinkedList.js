var MyNode = /** @class */ (function () {
    function MyNode(data) {
        this.data = data;
        this.next = null;
    }
    return MyNode;
}());
var MyLinkedList = /** @class */ (function () {
    function MyLinkedList() {
    }
    MyLinkedList.prototype.get = function (index) {
        var node = this.head;
        var count = 0;
        while (count !== index) {
            node = node.next;
            count++;
        }
        return node.data;
    };
    MyLinkedList.prototype.addAtHead = function (val) {
        var newNode = new MyNode(val);
        this.head = newNode;
    };
    MyLinkedList.prototype.addAtTail = function (val) {
        var node = this.head;
        while (node.next !== null) {
            node = node.next;
        }
        var newNode = new MyNode(val);
        node.next = newNode;
    };
    MyLinkedList.prototype.addAtIndex = function (index, val) {
        var currentNode = this.head;
        var count = 0;
        while (count !== index - 1) {
            currentNode = currentNode.next;
            count++;
        }
        var newNode = new MyNode(val);
        var nextNode = currentNode.next;
        currentNode.next = newNode;
        newNode.next = nextNode;
    };
    MyLinkedList.prototype.deleteAtIndex = function (index) {
        var currentNode = this.head;
        var count = 0;
        while (count !== index - 1) {
            currentNode = currentNode.next;
            count++;
        }
        var newNextNode = currentNode.next.next;
        currentNode.next = newNextNode;
    };
    return MyLinkedList;
}());
var obj = new MyLinkedList();
obj.addAtHead(1);
obj.addAtTail(3);
obj.addAtIndex(1, 2);
var param_1 = obj.get(1);
obj.deleteAtIndex(1);
var param_2 = obj.get(1);
console.log('param_1', param_1);
console.log('param_2', param_2);
