/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package SayaPintar;

/**
 *
 * @author Ardhenis Muhammad Aflah
 */
public class SayaPintar {
    public static void main(String[] args) {
         int i,j,k,w,dx=5;
        //setengah belah ketupat
        for(i = 1; i <= 5; i++){
            
            //spasi whitespaces
            for( j = 1; j <= i; j++){
                System.out.print(" ");
            }
            
            //bintangnya cuy
            
            for(k = 1; k <= dx; k++){
                 System.out.print("*");
            }
             //tuk bintang dilangit
            for(w = 4; w >= i; w--){
                System.out.print("*");
            }
            
            
            
            System.out.println();
            dx--;
            
        }
    }
}
