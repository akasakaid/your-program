public class prachipandeyy{
    public static void main(String[] args) {
        
        Scanner sc=new Scanner(System.in);
        int year= sc.nextInt();

        if(check(year)){
            System.out.println("It is a leap year.");
        }
        else{
            System.out.println("It is not a leap year.");
        }
    }

    static boolean checkYear(int year)
    {
        
        if (year % 400 == 0)
            return true;
            
        if (year % 100 == 0)
            return false;
     
        if (year % 4 == 0)
            return true;
    }
}