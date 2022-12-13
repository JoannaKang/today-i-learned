### 1. Singly Linked List
* Each node in a singly-linked list contains not only the value but also a reference field to link to the next node. 
* If we want to get the ith element, we have to traverse from the head node one by one. It takes us O(N) time on average to visit an element by index, where N is the length of the linked list.

    #### (1) Add Operation
    <img width="385" alt="Screenshot 2022-12-11 at 23 01 03" src="https://user-images.githubusercontent.com/34419390/206934012-835229ec-16f0-4b9b-8b98-51823f2a3931.png">
    
    * Initialize a new node cur with the given value;
    * Link the "next" field of cur to prev's next node next
    * Link the "next" field in prev to cur
        * you can insert a new node into a linked list in O(1) time complexity, which is very efficient.

    