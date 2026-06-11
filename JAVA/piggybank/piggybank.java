package JAVA.piggybank;

class PiggyBank {
    int balance = 0;

    void deposit() {
        balance++;
    }
    synchronized void synchronizedDeposit() {
        balance++;
    }
}

class FamilyMember extends Thread {
    PiggyBank bank;
    boolean sync;
    FamilyMember(PiggyBank bank, boolean sync) {
        this.bank = bank;
        this.sync = sync;
    }
    public void run() {
        for (int i = 0; i < 2000; i++) {
            if (sync) {
                bank.synchronizedDeposit();
            } else {
                bank.deposit();
            }
        }
    }
}

public class piggybank {
    public static void main(String[] args) throws InterruptedException {

        System.out.println("Without Synchronization:");

        PiggyBank bank1 = new PiggyBank();

        Thread t1 = new FamilyMember(bank1, false);
        Thread t2 = new FamilyMember(bank1, false);
        Thread t3 = new FamilyMember(bank1, false);
        Thread t4 = new FamilyMember(bank1, false);
        Thread t5 = new FamilyMember(bank1, false);

        t1.start();
        t2.start();
        t3.start();
        t4.start();
        t5.start();

        t1.join();
        t2.join();
        t3.join();
        t4.join();
        t5.join();

        System.out.println("Final Balance = $" + bank1.balance);

        System.out.println("\nWith Synchronization:");

        PiggyBank bank2 = new PiggyBank();

        Thread s1 = new FamilyMember(bank2, true);
        Thread s2 = new FamilyMember(bank2, true);
        Thread s3 = new FamilyMember(bank2, true);
        Thread s4 = new FamilyMember(bank2, true);
        Thread s5 = new FamilyMember(bank2, true);

        s1.start();
        s2.start();
        s3.start();
        s4.start();
        s5.start();

        s1.join();
        s2.join();
        s3.join();
        s4.join();
        s5.join();

        System.out.println("Final Balance = $" + bank2.balance);
    }
}