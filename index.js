const quizData = [
    {
        question: "1) Which of the following option leads to the portability and security of Java?",
        a: "Bytecode is executed by JVM",
        b: "The applet makes the Java code secure and portable",
        c: "Use of exception handling",
        d: "Dynamic binding between objects",
        answer: "a",
    },
    {
        question: "2) Which of the following is not a Java features?",
        a: "Dynamic",
        b: "Architecture Neutral",
        c: "Use of pointers",
        d: "Dyanamic binding between objects",
        answer: "c",
    },
    {
        question: "3) The \\u0021 article referred to as a",
        a: "Unicode escape sequence",
        b: "Octal escape",
        c: "Hexadecimal",
        d: "Line feed",
        answer: "a",
    },
    {
        question: "4) ______ is used to find and fix bugs in java programs.",
        a: "JVM",
        b: "JRE",
        c: "JDK",
        d: "JDB",
        answer: "d",
    },
    {
        question: "5) Which of the following is the valid declaration of a char?",
        a: "char ch = '\\utea';",
        b: "char ca = '\\tea';",
        c: "char cr = '\\u0223';",
        d: "char cc = '\\itea';",
        answer: "a",
    },
    {
        question: "6) What is the return type of the hashCode() method in the object class?",
        a: "Object",
        b: "int",
        c: "long",
        d: "void",
        answer: "b",
    },
    {
        question: "7) Which of the following is a valid long literal?",
        a: "ABH8097",
        b: "L990023",
        c: "904423",
        d: "0xnf029L",
        answer: "d",
    },
    {
        question: "8) What does the expression float a = 35 / 0 return?",
        a: "0",
        b: "Not a Number",
        c: "Infinity",
        d: "Run time exception",
        answer: "c",
    },
    {
        question: "9) Evaluate the following Java expression, if x=3, y=5, and z=10:<br>++z+y-y+z+x++",
        a: "24",
        b: "23",
        c: "20",
        d: "25",
        answer: "d",
    },
    {
        question: "10) Which of the follwing tools is used to genarate API documentation in HTML format from doc comments in source code?",
        a: "javap tool",
        b: "javaw command",
        c: "javadoc tool",
        d: "javah command",
        answer: "c",
    },
    {
        question: "11) Which of the following creates a list of 3 visible items and multiple selections abled?",
        a: "new List(false, 3)",
        b: "new List(3, true)",
        c: "new List(true, 3)",
        d: "new List(3, false)",
        answer: "b",
    },
    {
        question: "12) Which method of the class.class is used to determine the name of a class represented by the class object as a string?",
        a: "getClass()",
        b: "intern()",
        c: "getName()",
        d: "toString()",
        answer: "c",
    },
    {
        question: "13) In which process, a local variable has the same name as one of the instance variables?",
        a: "Serialization",
        b: "Variable Shadowing",
        c: "Abstarction",
        d: "Multi-threading",
        answer: "b",
    },
    {
        question: "14) Which of the following is true about the anonymous inner class?",
        a: "It has only methods",
        b: "Objects can't be created",
        c: "It has a fixed class name",
        d: "It has a no class name",
        answer: "d",
    },
    {
        question: "15) Waht do you mean by nameless objects?",
        a: "An object created by using the new keyword",
        b: "An object of a superclass created in the subclass",
        c: "An object without having any name but having a reference",
        d: "An object that has no reference",
        answer: "d"
    }
]

const quiz = document.getElementById("quiz");
const answerEl = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_Text = document.getElementById("a-text");
const b_Text = document.getElementById("b-text");
const c_Text = document.getElementById("c-text");
const d_Text = document.getElementById("d-text");
const submitEl = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_Text.innerText = currentQuizData.a;
    b_Text.innerText = currentQuizData.b;
    c_Text.innerText = currentQuizData.c;
    d_Text.innerText = currentQuizData.d;
}

function getSelected() {
    let answers = undefined;
    answerEl.forEach((answerEl) => {
        if (answerEl.checked){
            answers = answerEl.id;
        }
    });
    return answers;
} 

function deselectAnswers() {
    answerEl.forEach((answerEl) => {
        answerEl.checked = false;

    });
}

submitEl.addEventListener("click", () => {
    const answers = getSelected(); 
    if (answers) {
        if(answers === quizData[currentQuiz].answer){
            score++;

        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        }
        else {
            quiz.innerHTML = `
        <h2 style="padding: 10px">You answered correctly at ${score} / ${quizData.length} questions.</h2>
        <button onclick="location.reload()">Reload</button>
        `; 
        }
    }
});