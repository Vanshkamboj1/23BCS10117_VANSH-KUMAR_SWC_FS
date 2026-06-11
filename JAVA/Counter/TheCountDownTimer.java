package JAVA.Counter;

class ThreadA extends Thread {
    public void run() {
        for (int i = 10; i >= 1; i--) {
            System.out.println(i);
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}

class ThreadB extends Thread {
    private ThreadA t1;

    ThreadB(ThreadA t1) {
        this.t1 = t1;
    }

    public void run() {
        try {
            t1.join();
            System.out.println("Blast off!");
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}

public class TheCountDownTimer {
    public static void main(String[] args) {
        ThreadA t1 = new ThreadA();
        ThreadB t2 = new ThreadB(t1);

        t1.start();
        t2.start();
    }
}
