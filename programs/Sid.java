import java.util.*;

public class Sid {
    public static void main(String[] args) throws InterruptedException {
        // Create set1
        Set<String> s1 = new HashSet<>();
        s1.add("Sid");
        s1.add("Arjun");
        s1.add("hemant");

        // Create set2
        Set<String> s2 = new HashSet<>();
        s2.add("hemant");
        s2.add("mili");
        s2.add("sani");

        // Print the elements of both sets
        System.out.println("s1: " + s1);
        System.out.println("s2: " + s2);

        // Perform set operations
        doUnion(s1, s2);
        doIntersection(s1, s2);

    }

    public static void doUnion(Set<String> s1, Set<String> s2) {
        Set<String> s1Unions2 = new HashSet<>(s1);
        s1Unions2.addAll(s2);
        Set s3 = s1Unions2;
        System.out.println("s1 union s2: " + s1Unions2);
    }

    public static void doIntersection(Set<String> s3, Set<String> s2) throws InterruptedException {
        Set<String> s3Intersections2 = new HashSet<>(s3);
        s3Intersections2.retainAll(s2);
        System.out.println("s3 intersection s2: " + s3Intersections2);
    }
}
