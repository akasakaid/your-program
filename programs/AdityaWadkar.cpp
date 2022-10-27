//This script provides a solution to Fractional knapsack  problem
// For more details about this problem visit :- https://www.geeksforgeeks.org/0-1-knapsack-problem-dp-10/
#include<bits/stdc++.h>
using namespace std;
int main()
{
    double p[]={0.02,0.05,0.1,0.2,0.5};
    double w[]={50,40,30,20,10};
    int n = *(&p + 1) - p;
    double bucket_weight=100;
    double profit[n]={};
    double display_vector[n]={0};
    double fract[n]={};

    for(int i=0;i<n;i++){
        fract[i]=p[i]/w[i];
    }
    
    for(int i=0;i<n;i++){
        profit[i]=p[i];
    }

    for (int i=0;i<n;i++){
        for(int j=0;j<n-i;j++){
            if(fract[j]<fract[j+1]){
                double temp =p[j];
                p[j]=p[j+1];
                p[j+1]=temp;

                temp =w[j];
                w[j]=w[j+1];
                w[j+1]=temp;

                temp =fract[j];
                fract[j]=fract[j+1];
                fract[j+1]=temp;

            }
        }
    }

    double profit_bucket=0;
    for(int i=0;i<n;i++){
        if(bucket_weight>=w[i]){
            bucket_weight -= w[i];
            profit_bucket += p[i];
            double key=p[i];
            for(int i =0;i<n;i++){
                if(key==profit[i]){
                    display_vector[i] = 1;
                    break;
                }            
            }
    
        }
        else{
            profit_bucket += p[i]*(bucket_weight/w[i]);
            double key=p[i];
            for(int i =0;i<n;i++){
                if(key==profit[i]){
                    display_vector[i]=(bucket_weight/w[i]);
                }
            }
            break;
        }
    }
    cout<<"Display vector : ";
    for(int i=0;i<n;i++){
        cout<<display_vector[i]<<" ";
    }
    cout<<"\nmax profit : "<<profit_bucket<<endl;

    return 0;

}
