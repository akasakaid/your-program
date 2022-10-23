# include <bits/stdc++.h>
#define ll long long
using namespace std;
/void push(int stack[],int &top,int &n, int &choice)
{
    int ele;
    if (top==n)
    {
        cout<<"overflow";
        choice=2;
    }
    else
    {
    cin>>ele;
    top+=1;
    stack[top]=ele;
    }
}
void pop(int &top, int &choice)
{
    if (top==-1)
    {
        cout<<"underflow\n";
        choice=2;
    }
    else
    top-=1;
}
int main() {

int stack[100],top=-1,n;
cout<<"Enter the number of elements you want to add";
cin>>n;
int choice=0;
while(choice!=2)
{

cout<<"0-push 1-pop 2. exit\n";
cin>>choice;
if (choice==0)
{
    push(stack,top,n,choice);
}
else if(choice==1)
{
    pop(top,choice);
}
else
{
    break;
}
}
for(int i=top;i>=0;i--){
cout<<stack[i]<<endl;
}

return 0;
}