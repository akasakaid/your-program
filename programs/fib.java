// Recursive fibonacci sequence for Java!

public class fib {
	public static int fibRec(int n) {
        if(n == 0) {
            return 0;
        }
        if(n == 1 || n == 2) {
            return 1;
        } 
        return fibRec(n - 2) + fibRec(n - 1);
	}

    public static void main(String args[]) {
        int num = 10; // number of numbers in the series to print
        for(int i = 0; i < num; i++) {
            System.out.print(fibRec(i) +" ");
		}
	}
}