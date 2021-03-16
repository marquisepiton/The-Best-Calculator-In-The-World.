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

imports: 

- {render} from '@testing-library/react'
- "React from 'react'
- "ReactDom from 'react-dom'
- './index.css'

helper Functions/ Global Functions: 

    ReactDom.render(RENDER: Class "App", ID: 'root')

    COMMENT: Shortcut function to use the console 
    FUNCTION cl(check):
    COMMENT: console.log(check)
    This "console" THEN "Log INSIDE "check"

    COMMENT: Refreshes the page. 
    FUNCTION refresh(): 
        COMMENT: "location.reload()"
        This "location" THEN "Reload"


    COMMENT: Create an instance of "App" 
    FUNCTION init():
        CREATE: An instance of "App" equal to "a"
        COMMENT: "a.init()
        FUNCTION: init()

    COMMENT: Clear the outputBox
    FUNCTION clear(): 
        SET =

    COMMENT: GO back a space
    FUNCTION: back(): 



Classes: 

App EXTENDS from "React.Component": 

    CONSTRUCTOR: 
        COMMENT: Creates a new instance of "Board" 
        THIS: board equal to a new instance of "Board"

    FUNCTION: 

        COMMENT: Runs the init function from class "Board" 
        init():
            FUNCTION: init()


Board EXTENDS from "React.Component":

    CONSTRUCTOR: 
        COMMENT: Create a new instances of Buttons
        THIS: inputButton equals to a new instance of "InputButtons"

    FUNCTION: 

        COMMENT: Runs the init function from class "InputButtons" 
        init():
            FUNCTIONS: init()


        render(): 
            COMMENT: Class name: Frame
            DISPLAY: CARD (Boostrap)


InputButtons EXTENDS from "React.Component": 

    CONSTRUCTOR: 

        COMMENT: create a new instance of "Calculate" 
        THIS: calculate equals to a new instance of "Calculate" 

        COMMENT: keep a array of numbers:
        COMMENT: correspond with the number buttons
        THIS: numButtons equals to an array [0,1, 2, 3, 4, 5, 6, 7, 8, 9];
        THIS: percentB equal to buttonPercent
        THIS: divideB equal to buttonDivide
        THIS: multipleB equal to buttonMultiply
        THIS: subtractB equal to buttonSubtract
        THIS: addB equal to buttonAdd
        THIS: equalB equal to buttonEqual
        THIS: decimalB equal to buttonDecimal
        THIS: outputBox equal to outputDisplay
        THIS: clearB equal to buttonClear
        THIS: backB equal to buttonBack

    FUNCTION: 

        renderButton(): 
        DISPLAY: Within the Card (ClassName: "frame"):
            RETURN:  
                RENDER: 
                    ROW 1: outputBox
                    ROW 2: 
                        COLUMN 1: clearB
                        COLUMN 2: backB
                        COLUMN 3: percentB
                        COLUMN 4: divideB
                    ROW 3: 
                        COLUMN 1: numButton[7]
                        COLUMN 2: numButton[8]
                        COLUMN 3: numButton[9]
                        COLUMN 4: multipleB
                    ROW 4: 
                        COLUMN 1: numButton[4]
                        COLUMN 2: numButton[5]
                        COLUMN 3: numButton[6]
                        COLUMN 4: subtractB
                    ROW 5: 
                        COLUMN 1: numButton[1]
                        COLUMN 2: numButton[2]
                        COLUMN 3: numButton[3]
                        COLUMN 4: numButton[4]
                    ROW 6: 
                        COLUMN 1: decimalB
                        COLUMN 2: numButton[0]
                        COLUMN 3: equalB
                    

Calculate EXTENDS from "React.Component":

    This



    FUNCTION: 
        add(): 

        subtract(): 

        divide():

        percent(): 

        multiply():

        decimal():














    





