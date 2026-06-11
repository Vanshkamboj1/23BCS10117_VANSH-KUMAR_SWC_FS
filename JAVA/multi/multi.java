package JAVA.multi;

class SearchTask extends Thread{
    private String textPart;
    private String word;

    SearchTask(String textPart, String word) {
        this.textPart = textPart;
        this.word = word;
    }
    public void run() {
        if (textPart.contains(word)) {
            System.out.println(Thread.currentThread().getName() +
                    " found the word \"" + word + "\"");
        } else {
            System.out.println(Thread.currentThread().getName() +
                    " did not find the word");
        }
    }
}
public class multi {
    public static void main(String[] args) throws InterruptedException {
        String text =
                "Java is a programming language. "
              + "Multithreading allows concurrent execution. "
              + "Threads can search large text efficiently. "
              + "Java provides Thread class for multithreading.";

        String word = "Java";

        int len = text.length();
        int partSize = len / 3;

        String part1 = text.substring(0, partSize);
        String part2 = text.substring(partSize, 2 * partSize);
        String part3 = text.substring(2 * partSize);

        SearchTask t1 = new SearchTask(part1, word);
        SearchTask t2 = new SearchTask(part2, word);
        SearchTask t3 = new SearchTask(part3, word);

        t1.setName("Thread-1");
        t2.setName("Thread-2");
        t3.setName("Thread-3");

        t1.start();
        t2.start();
        t3.start();

        t1.join();
        t2.join();
        t3.join();

        System.out.println("Search completed.");
    }

}
