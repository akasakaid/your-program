package com.Rishabh;
import java.util.Scanner;

public class TicTecTeoFinal {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        char[][] arr = new char[3][3];
        //initializing and displaying the board
        System.out.println("---------");
        for (int i = 0; i < 3; i++) {
            System.out.print("| ");
            for (int j = 0; j < 3; j++) {
                arr[i][j] = ' ';
                System.out.print(arr[i][j] + " ");
            }
            System.out.print("|");
            System.out.println();
        }
        System.out.println("---------");
        boolean gameFinished = false; //checking for game over
        int stepCount = 0; //counting to see if we add 'X' or 'O'
        while (!gameFinished) {
            boolean badInput = true;
            //getting coordinates from player
            while (badInput) {
                System.out.println("Enter the coordinates: ");
                String newXinput = scanner.next();
                String newYinput = scanner.next();
                int newX;
                int newY;
                try {
                    newX = Integer.parseInt(newXinput);
                    newY = Integer.parseInt(newYinput);
                } catch (NumberFormatException e) {
                    System.out.println("You should enter numbers!");
                    break;
                }
                if (newX > 3 || newX < 1 || newY > 3 || newY < 1) {
                    System.out.println("Coordinates should be from 1 to 3!");
                } else if (arr[newX - 1][newY - 1] == 'X' || arr[newX - 1][newY - 1] == 'O') {
                    System.out.println("This cell is occupied! Choose another one");
                } else {
                    if (stepCount % 2 == 0) {
                        arr[newX - 1][newY - 1] = 'X';
                        stepCount++;
                        badInput = false;
                    } else {
                        arr[newX - 1][newY - 1] = 'O';
                        stepCount++;
                        badInput = false;
                    }
                }
            }
            //displaying new state of the board
            System.out.println("---------");
            for (int i = 0; i < 3; i++) {
                System.out.print("| ");
                for (int j = 0; j < 3; j++) {
                    System.out.print(arr[i][j] + " ");
                }
                System.out.print("|");
                System.out.println();
            }
            System.out.println("---------");
            //checking if anyone won
            boolean xWin = false;
            boolean oWin = false;
            if (arr[1][1] == arr[2][2] && arr[1][1] == arr[0][0]) {
                if (arr[1][1] == 'X') xWin = true;
                if (arr[1][1] == 'O') oWin = true;
            }
            if (arr[1][1] == arr[0][2] && arr[1][1] == arr[2][0]) {
                if (arr[1][1] == 'X') xWin = true;
                if (arr[1][1] == 'O') oWin = true;
            }
            for (int i = 0; i < 3; i++) {
                if (arr[i][0] == arr[i][1] && arr[i][0] == arr[i][2]) {
                    if (arr[i][1] == 'X') xWin = true;
                    if (arr[i][1] == 'O') oWin = true;
                }
                if (arr[0][i] == arr[1][i] && arr[0][i] == arr[2][i]) {
                    if (arr[1][i] == 'X') xWin = true;
                    if (arr[1][i] == 'O') oWin = true;
                }
            }
            //if anyone wins, game over
            if (xWin && !oWin) {
                System.out.print("X wins");
                gameFinished = true;
            } else if (!xWin && oWin) {
                System.out.print("O wins");
                gameFinished = true;
            } else if (!xWin && !oWin && stepCount == 9) {
                System.out.print("Draw");
                gameFinished = true;
            }
        }
    }
}