import java.util.*;
public class Sanidhya   
{
    public static void main(String[] args) {
        int temp,j,i,sum=0,sum2=0;
        Scanner sc=new Scanner(System.in);
        int[] arr=new int[5];
        System.out.println("Enter elements : ");
        for(i=0;i<5;i++)
        {
            System.out.print((i+1)+" --> ");
            arr[i]= sc.nextInt();
        }
        for(i=0;i<5;i++)
        {
            sum=sum+arr[i];
        }
        System.out.println("Sum of all the elements : "+sum);
        for(i=0;i<5;i=i+2)
        {
            sum2=sum2+arr[i];
        }
        System.out.println("Sum of alternate element(odd) : "+sum2);
        sum2=0;
        for(i=1;i<5;i=i+2)
        {
            sum2=sum2+arr[i];
        }
        System.out.println("Sum of alternate element(even) : "+sum2);
        for(i=0;i<5;i++)
        {
            for(j=0;j<5;j++)
            {
                if(arr[i]>arr[j])
                {
                    temp=arr[i];
                    arr[i]=arr[j];
                    arr[j]=temp;
                }
            }
        }
        //System.out.println(Arrays.toString(arr));
        System.out.println("Second Highest Element : "+arr[1]);
    }
    
    }

