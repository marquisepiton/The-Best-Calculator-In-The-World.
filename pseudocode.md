# Calculator Pseudo Code

## Objective: 

The user will be able to do basic calculations. 

## Steps: 

START: 

    1. The user opens the page. All Components render. 
    2. The user types the equation they want to solve follow by a equal sign. 
    3. The program Calculate the users equation base on the expression that they chose between the numbers. 
    4. The Program Shows/Render the output to the user. 

STOP. 

## Events: 

    - User "Clicks" one of the the # buttons: The number will in the output box.
    - User "Clicks" one of the symbol without selecting a number first: Nothing will happen. 
    - User puts in a equation and then "Clicks" the equal sign: Will give the user the solution. 
    - User "Clicks" on the clear button: Will clear the current equation. Everything is null .
    - User "Clicks" the backspace button: Will erase the current number that was typed.
    - User refreshes the page: All data will be lost. 

## Object/ Classes: 

    Components: 

        - 19 Buttons:
            - 0 - 9
            - "Clear"
            - "Percent" 
            - "Division"
            - "Multiplication"
            - "Subtraction"
            - "Addition"
            - "Equal"

        - Board/ Frame
        - Output Box

    Classes: 

        - App
        - Board
        - ButtonInput
        - Calculate

        Note: 

        App => Board => ButtonInput => Calculate


## Functions: 

App EXTENDS from "React.Component": 


Board EXTENDS from "React.Component":


Button EXTENDS from "React.Component": 


Calculate EXTENDS from "React.Component":









    





