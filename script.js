const textBox = document.getElementById("question");
const input = document.getElementById("input");
//const ballDiv = document.querySelector(".ball");
const output = document.querySelector(".output");
let timerId;

// Handles randomizing the results from the arrays.
function randomize(arrValue) {
    let randomIndex =  Math.floor(Math.random()*arrValue.length);
    return randomIndex;
}

// Resets the 8ball to its default look.
function resetAnswer(){
    answer.textContent = "8";
    answer.style.fontSize = "120px";
    answer.style.fontWeight = "normal";
}


//Adds the question and answer from the function below to the span on the page.
function addQuestion(query, response) {

    const div = document.createElement("div");
    div.className = "outputEl"
    div.textContent = `${query}  :  ${response}`;
    output.appendChild(div);

    //removes the first child if there are more than 9 elements inside output
    if(output.childElementCount > 9){
        //console.log("longer!")
        output.childNodes[1].remove()
    }
}

// Handles adding new text to the answer element and filtering the question asked.
function askQuestion(){
    let magic8ball = [
        "No",
        "Yes",
        "Wouldn't Count on It", 
        "Did the Chicken Cross the Road?", 
        "Why would you ask that?", 
        "Ask Again Later", 
        "No Way.", 
        "Think about it and ask again later.", 
        "Not in this lifetime.",
        ];
    const answer = document.querySelector(".response"); 
    const question = textBox.value;
    if (textBox.value === ""){
        return console.log("empty string");
    } else {
        console.log(question)
        answer.style.display = "none"; 
        
        // call the randomize function and store the result
        let randomIndex = randomize(magic8ball);

        //Assign the random text to the response and add styling
        let response = magic8ball[randomIndex];
        answer.textContent = response;
        answer.style.cssText = "font-size: 25px; font-weight: bold; text-align: center;"; //More consice way to add all the styles to the new element. 
        answer.style.display = "block"; // Making the answer visible
        textBox.value = "";

        //Adds the question and response given to the output.
        addQuestion(question, response);

        //Makes sure there isn't a timer already before countdown.
        clearTimeout(timerId);
        timerId = setTimeout(resetAnswer, 8000);
    }
}

// Give the question field a random placeholder each time its typed in.
function setPlaceholder(){
    let placeholders = [
        "Ask anything your heart desires",
        "What is weighing on your mind?",
        "What may I clarify today?",
        "Allow me to pull back the veil.",
        "All may become clear with one question.",
        "You are indecisive, let me help.",
    ]
        let placeholderIndex = randomize(placeholders);
        textBox.placeholder = placeholders[placeholderIndex];
}

// Checks for the textbox to be accessed, and calls the function.
textBox.addEventListener("focus", setPlaceholder)

// Handles toggling between light and dark mode on webpage.
function toggleMode(){
    const toggleBtn =  document.querySelector(".switch")
    if(document.body.classList.contains("lightmode")){ //.contains() seems useful
        document.body.className = "darkmode";
        toggleBtn.textContent = "ON"
    }else{
        document.body.className = "lightmode"
        toggleBtn.textContent = "OFF"
    }
}

//Generates a random question for the user to input.
function randomQuestion(){
    let questionsArr = [
        "Should I have steak today?",
        "Will I get super powers soon?",
        "Will Naruto ever be the main character again?",
        "Should I play Valorant today?",
        "Should I go to the gym today?",
        "Do you see a girlfriend in my future?",
    ];

    let questionIndex = randomize(questionsArr)
    textBox.value = questionsArr[questionIndex]
}

// Clears the output tab when the button is clicked.
function clearOutput(){
    const nodeArr = Array.from(output.childNodes)
    for(let i = 1; i < nodeArr.length; i++){
        nodeArr[i].remove();
    }
}

