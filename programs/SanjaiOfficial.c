#include<stdio.h>
#include<stdlib.h>

struct Node
{
    int data;
    struct Node * next;
};

//------------Function to traverse the linked list-----------------
void linkedListTraversal(struct Node* head)
{
    struct Node * ptr = head;
    
    do
    {
        printf("%d-> ",ptr->data);
        ptr=ptr->next;
        
    }while (ptr!=head);

}

//----------------Function for Linked lIst creation--------------------------
struct Node * linkedListCreation(struct Node * head , int n)
{
    struct Node * ptr = head;
    head->next = NULL;
    if(head == NULL)
    {
        printf("Unable to locate the memory!!!");
        exit(0);
    }
    printf("Enter the data for node 1: ");
    scanf("%d",&(head->data));
    for(int i=2;i<=n;i++)
    {
        struct Node * newNode = (struct Node *)malloc(sizeof(struct Node));
        printf("Enter the data for node %d: ",i);
        scanf("%d",&(newNode->data));
        newNode->next = NULL;
        ptr->next = newNode;
        ptr = ptr->next; 
    }
    ptr->next = head;
    return head;
}

//--------------------Function for reversing the circular singly linked list 
void circularLinkedListReversal(struct Node ** head)
{
    struct Node * currNode , * prevNode,* nextNode, *headNode;
    currNode = *head;
    headNode = *head;
    do{
        nextNode = currNode->next;
        currNode->next = prevNode;
        prevNode = currNode;
        currNode = nextNode;
    }while(currNode!=headNode);
    (*head)->next = prevNode;
    *head = prevNode;
}

int main()
{   
    struct Node * head = (struct Node *)malloc(sizeof(struct Node));
    int n;
    printf("Enter the no. of nodes: ");
    scanf("%d",&n);
    head = linkedListCreation(head,n);
    printf("\nThe linked list is : \n");
    linkedListTraversal(head);

    printf("\nReversed Linked List is : \n");
    circularLinkedListReversal(&head);
    linkedListTraversal(head);
    return 0;
}
