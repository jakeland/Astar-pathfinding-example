/**
 * Created by Jakeland on 9/15/2016.
 */

//heap class for pathfinding optimization

class Heap{
    constructor(){
        this.items = [];
        this.currentItemCount = 0;

    }
    start(){

    }
    update(){

    }
    createHeap(maxHeapSize){
        items[maxHeapSize] = "maxHeapSize";


    }
    add(item){
        item.heapIndex = this.currentItemCount;
        items[this.currentItemCount] = item;
        sortUp(item);
        this.currentItemCount++;
    }
    sortDown(){
        var childIndex = 0;
        while(true){
            childIndex = "cancel";
            if(childIndex == "cancel"){

            }
            else{
                break;
            }
        }
    }
    removeFirst(){
        var firstItem = items[0];
        currentItemCount--;
        items[0].heapIndex = 0;
        sortDown();
    }
    sortUp(item){
        var parentItem;
        var parentIndex = 0;
        parentIndex = (item.heapIndex-1/2);
        while (true){
            parentItem = items[parentIndex];
            if ( item < items[parentIndex]){
                //swap
            }
            else{
                break;
            }
            parentIndex = (item.heapIndex - 1)/2;
        }


    }


}