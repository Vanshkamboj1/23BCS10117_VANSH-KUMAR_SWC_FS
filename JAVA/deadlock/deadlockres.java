package JAVA.deadlock;

class Kitchen {
    static final Object knife = new Object();
    static final Object cuttingBoard = new Object();
}

class Chef1 extends Thread {
    public void run() {
        synchronized (Kitchen.knife) {
            System.out.println("Chef 1 picked up the Knife");

            try {
                Thread.sleep(100);
            } catch (InterruptedException e) {
            }

            System.out.println("Chef 1 waiting for Cutting Board");

            synchronized (Kitchen.cuttingBoard) {
                System.out.println("Chef 1 is preparing food");
            }
        }
    }
}

class Chef2 extends Thread {
    public void run() {
        synchronized (Kitchen.cuttingBoard) {
            System.out.println("Chef 2 picked up the Cutting Board");

            try {
                Thread.sleep(100);
            } catch (InterruptedException e) {
            }

            System.out.println("Chef 2 waiting for Knife");

            synchronized (Kitchen.knife) {
                System.out.println("Chef 2 is preparing food");
            }
        }
    }
}

public class deadlockres {
    public static void main(String[] args) {
        Chef1 t1 = new Chef1();
        Chef2 t2 = new Chef2();

        t1.start();
        t2.start();
    }
}