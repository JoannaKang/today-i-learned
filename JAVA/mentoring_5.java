import java.util.*;

/*
In computing, the producer-consumer problem (also known as the bounded-buffer problem) is a classic example of a multi-process synchronization problem. The problem describes two processes, the producer and the consumer, which share a common, fixed-size buffer used as a queue. 

The producer’s job is to generate data, put it into the buffer, and start again.
At the same time, the consumer is consuming the data (i.e. removing it from the buffer), one piece at a time.

Make sure that the producer won’t try to add data into the buffer if it’s full, and that the consumer won’t try to remove data from an empty buffer.
*/


class Main {
  public static void main(String[] args) throws InterruptedException {
    Shop shop = new Shop();

    Runnable producer = new Producer(shop);
    Thread producerThread = new Thread(producer);
  
    Runnable consumer = new Consumer(shop);
    Thread consumerThread = new Thread(consumer);
  
    producerThread.start();
    consumerThread.start();

    Thread.sleep(1000);

    producerThread.stop();
    consumerThread.stop();
    
  }
}

class Shop {
  LinkedList<Integer> stock = new LinkedList<>();
  int capacity = 2;
  int item = 0;

  // TODO: implement
  public void produce() {
    while (true) {
      synchronized(this) {
        if (stock.size() <= capacity) {
          stock.add(item);
          System.out.println("produce " + item);
          item += 1 ;
        }
        notify();      
      }
    }
  }

  // TODO: implement
  public void consume() {
    while (true) {
      synchronized(this) {
        if (stock.size() > 0) {
          Integer removedItem = stock.removeFirst();
          System.out.println("consume " + removedItem);
        }
        notify();      
      }
    }  
  }
}

class Producer implements Runnable {
  Shop shop;

  public Producer(Shop shop) {
    this.shop = shop;
  }
  
  @Override
    public void run() {
      shop.produce();
    }
}

class Consumer implements Runnable {
  Shop shop;

  public Consumer(Shop shop) {
    this.shop = shop;
  }
  
  @Override
    public void run() {
      shop.consume();
    }
}