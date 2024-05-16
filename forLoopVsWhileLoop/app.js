let forLoopEventListener = document.getElementById("forButton");
forLoopEventListener.addEventListener("click", ForLoop);


function ForLoop()
{
    let element = document.getElementById("forButton");
    element.remove();
}




let whileListen = document.getElementById("whileButton");
whileListen.addEventListener("click", whileLoop);

function whileLoop()
{  
    let whileChoice = document.getElementById("whileChoice").value;
    
    if(whileChoice == 0 || whileChoice == null){

        document.getElementById("whileResult").innerHTML = "do not leave blank or set as 0";
    
    } else{
        
        let counter = 1;
        let string = "";
        
        while(counter <= whileChoice)
            {
                string = string + counter;
                console.log(`${string} not equal to ${whileChoice}`);
                string = string + ", ";
                counter++;
            }

        whileWrite(string + "the counter has reached your value!")
        console.log(string + "the counter has reached your value!")
    }

}

function whileWrite(counter)
{
    let whileResult = document.getElementById("whileResult");
    whileResult.innerHTML = counter;
}


