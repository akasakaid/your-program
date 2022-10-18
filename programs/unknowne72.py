#Rock Paper Scissors with ASCII Art Python
#Use of random library and its functions

import random

rock = '''
    _______
---'   ____)
      (_____)
      (_____)
      (____)
---.__(___)
'''

paper = '''
    _______
---'   ____)____
          ______)
          _______)
         _______)
---.__________)
'''

scissors = '''
    _______
---'   ____)____
          ______)
       __________)
      (____)
---.__(___)
'''


game_options = [rock, paper, scissors]  #All Choices

choice = int(input('What do you choose? Type 0 for rock, 1 for Paper or 2 for Scissors.\n'))
if choice not in range(0,3): 
  print("Invalid Input") 
else:
  print(game_options[choice])           
  ai_choice = random.randint(0,2)       
  print(game_options[ai_choice])  


  #Making a pair of user choice and AI choice for comparisons      
  current_combination = [choice, ai_choice]


  #Winning Pairs, the only cases in which a user can win
  winning_combinations = [[0,2], [1,0], [2,1]]

  #It's a draw if both have the same choice.
  #Compare the current pair with winning combination for result
  if choice==ai_choice: print("It's a Draw. ") 
  else: 
    if current_combination in winning_combinations: print("You Win.")
    else: print("You Lose.")
    
