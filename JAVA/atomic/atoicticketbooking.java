package JAVA.atomic;

import java.util.concurrent.atomic.AtomicInteger;

class FlightBooking extends Thread {
    private static final AtomicInteger seatsLeft = new AtomicInteger(10);

    public void run() {
        while (true) {
            int currentSeats = seatsLeft.get();

            if (currentSeats <= 0) {
                break;
            }

            if (seatsLeft.compareAndSet(currentSeats, currentSeats - 1)) {
                System.out.println(
                        Thread.currentThread().getName()
                                + " booked Seat "
                                + currentSeats
                );
                break;
            }
        }
    }
}

public class atoicticketbooking {
    public static void main(String[] args) throws InterruptedException {

        Thread[] users = new Thread[100];

        for (int i = 0; i < 100; i++) {
            users[i] = new FlightBooking();
            users[i].setName("User-" + (i + 1));
            users[i].start();
        }

        for (int i = 0; i < 100; i++) {
            users[i].join();
        }

        System.out.println("Seats Remaining: "
                + FlightBooking.class.getDeclaredFields().length);
    }
}