module.exports =  class SinglyLinkedList{
    constructor(){
        this.head = this.tail= null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = this.tail= newNode
        }
        else{
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++;
        return true;
    }
    pop(){
         if(!this.head) return null;
         var current = this.head
         var prevTail = current;
         while(current.next){
             prevTail = current;
             current = current.next;
         }
         this.tail = prevTail;
         this.tail.next = null;
         this.length--;
         if(this.length==0){
             this.head = this.tail = null;
         }
         return current;
    }
    shift(){
         if(!this.head) return null;
         var currentHead = this.head;
         this.head = currentHead.next;
         this.length--
         if(this.length==0){
             this.head = this.tail = null;             
         }
         return currentHead;
    }
    unshift(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = this.tail = newNode     
        }
        else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return true
    }
    get(index){
        if(index>=this.length || index<0)return null;
        var counter = 0;
        var current = this.head;
        while(counter != index){
            current = current.next;
            counter++
        }
        return current;
    }
    set(value,index){
        var nodeFound = this.get(index);
        if(nodeFound){
            nodeFound.val = value;
            return true;
        }
        else return false;
    }
    insert(val,index){
        if(index<0 || index >= this.length) return false;
        if(index == 0) return !!this.unshift(val);
        if(index == this.length) return !!this.push(val)
        var newNode  = new Node(val)
        var prevNode = this.get(index-1)
        newNode.next = prevNode.next;
        prevNode.next = newNode;
        this.length++
        return true;
    }
    remove(index){
        if(index<0 || index >= this.length) return null;
        if(index == 0) return this.shift();
        if(index == this.length-1) return this.pop()
        var prevNode = this.get(index-1)
        var removed = prevNode.next;
        prevNode.next = removed.next;
        this.length--
        return removed;
    }
    getList(){
      return this;
    }
}
class Node{
    constructor(val){
        this.val = val;
        this.next = null
    }
}
