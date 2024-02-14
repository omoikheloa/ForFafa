const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

let slideIndex = 0;
const slides = document.getElementsByClassName("mySlides");
const slideInterval = 1500; // Change slide every 5 seconds
let slideTimer;

// Initialize slideshow
showSlides();

function showSlides() {
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Display the current slide
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = "block";

    // Set timer for next slide
    slideTimer = setTimeout(showSlides, slideInterval);
}

// Pause slideshow on hover
for (let i = 0; i < slides.length; i++) {
    slides[i].addEventListener("mouseenter", () => {
        clearTimeout(slideTimer);
    });
    slides[i].addEventListener("mouseleave", () => {
        slideTimer = setTimeout(showSlides, slideInterval);
    });
}

const quizData = [
    {
        question: "Describe my relationship with my family.",
        answers: [
            { text: "Close-knit and supportive", correct: true },
            { text: "Distant but respectful", correct: false },
            { text: "Strained but improving", correct: false },
            { text: "Other", correct: false }
        ]
    },
    {
        question: "When was the last time I cried? Why?",
        answers: [
            { text: "Watching a movie", correct: true },
            { text: "Reflecting on life", correct: false },
            { text: "Unknown", correct: false },
            { text: "Other", correct: false }
        ]
    },
    {
        question: "If I could be someone else, who would I be?",
        answers: [
            { text: "A lover", correct: false },
            { text: "A fighter", correct: false },
            { text: "A dreamer", correct: true },
            { text: "A singer", correct: false }
        ]
    },
    {
        question: "What makes me most proud of myself?",
        answers: [
            { text: "Connections", correct: true },
            { text: "Experience", correct: false },
            { text: "Change", correct: false },
            { text: "Growth", correct: true }
        ]
    },
    {
        question: "Who is the most important person in my life?",
        answers: [
            { text: "My brother", correct: false },
            { text: "Fafa", correct: true },
            { text: "My tailor", correct: false },
            { text: "My boss", correct: false }
        ]
    },
    {
        question: "How many scars do I have on my body?",
        answers: [
            { text: "8", correct: true },
            { text: "12", correct: false },
            { text: "10", correct: false },
            { text: "9", correct: false }
        ]
    },
    {
        question: "My favorite month of the year?",
        answers: [
            { text: "March", correct: false },
            { text: "February", correct: true },
            { text: "June", correct: false },
            { text: "December", correct: false }
        ]
    },
    {
        question: "What is my favorite color?",
        answers: [
            { text: "Black", correct: false },
            { text: "Blue", correct: false },
            { text: "Red", correct: true },
            { text: "Grey", correct: false }
        ]
    },
    {
        question: "My lucky number?",
        answers: [
            { text: "23", correct: true },
            { text: "20", correct: false },
            { text: "13", correct: false },
            { text: "17", correct: false }
        ]
    },
    {
        question: "What is my zodiac sign?",
        answers: [
            { text: "Virgo", correct: false },
            { text: "Capricon", correct: false },
            { text: "Aquarius", correct: false },
            { text: "Pisces", correct: true }
        ]
    },
    {
        question: "Who is my ideal type?",
        answers: [
            { text: "Fat", correct: false },
            { text: "Slim", correct: true },
            { text: "Stick", correct: false },
            { text: "Balloon", correct: false }
        ]
    },
    {
        question: "What is my biggest fear?",
        answers: [
            { text: "Water", correct: false },
            { text: "Falling", correct: false },
            { text: "Darkness", correct: false },
            { text: "Heights", correct: true }
        ]
    },
    {
        question: "My favorite sport?",
        answers: [
            { text: "Football", correct: true },
            { text: "Basketball", correct: false },
            { text: "Baseball", correct: false },
            { text: "Tennis", correct: false }
        ]
    },
    {
        question: "Where do I come from?",
        answers: [
            { text: "Kano", correct: false },
            { text: "Delta", correct: false },
            { text: "Bayelsa", correct: false },
            { text: "Edo", correct: true }
        ]
    },
    {
        question: "What is my favorite song?",
        answers: [
            { text: "Sweat", correct: true },
            { text: "One Dance", correct: true },
            { text: "Ohema", correct: true },
            { text: "Loveee Song", correct: true }
        ]
    },
];

const quizContainer = document.querySelector('.quiz-container');
const questionElement = document.getElementById('question');
const answersElement = document.getElementById('answers');
const resultElement = document.getElementById('result');
const quizForm = document.getElementById('quiz-form');

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionElement.innerText = currentQuizData.question;
    answersElement.innerHTML = '';
    currentQuizData.answers.forEach((answer, index) => {
        answersElement.innerHTML += `
            <input type="radio" name="answer" id="answer${index}" value="${answer.correct}">
            <label for="answer${index}">${answer.text}</label><br>
        `;
    });
}

function showResult() {
    resultElement.innerText = `You scored ${score} out of ${quizData.length}. You know me so well!`;
}

function resetQuiz() {
    currentQuestion = 0;
    score = 0;
    loadQuestion();
    resultElement.innerText = '';
}

quizForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (selectedAnswer) {
        if (selectedAnswer.value === 'true') {
            score++;
        }
        currentQuestion++;
        if (currentQuestion < quizData.length) {
            loadQuestion();
        } else {
            showResult();
        }
    }
});

loadQuestion();

// Delay the execution of the code block for 3 minutes (180000 milliseconds)
setTimeout(function() {
    // Message element
    var mainMessageElem = document.getElementById("mainMessage");
  
    // Signature element
    var signatureElem = document.getElementById("signature");
  
    // 3500 MS = 3.5 seconds
    var intervalValue = 3500;
  
    // Create timer based on interval
    // Calls the updateText function which changes the message
    var updateTimer = setInterval(updateText, intervalValue);
  
    // The index of the current message being displayed
    var messageIndex = 0;
  
    // Array containing all the messages
    var messages = ["there's something I've been meaning to ask you.",
                    "You know how we're always vibing together", 
                    "gossiping, and having those deep",
                    "conversations about life and everything in between?",
                    "Well, I was thinking", 
                    "what if we took this to the next level?",
                    "What if we officially became a 'we'?", 
                    "I want to be more than just",
                    "your best friend or your gossip partner.",
                    "I want to be the person who makes you laugh in person", 
                    "holds your hand when you need it",
                    "and goes on all those crazy adventures with you.",
                    "What do you say?",
                    "Will you take this journey with me and be my girlfriend?"];
  
    // Update the message element with the next message.
    // When done call showSignature function
    function updateText() {
      mainMessageElem.innerHTML = messages[messageIndex++];
      
      // If all messages have been displayed
      if (messageIndex >= messages.length) {
        // When done showing the messages, display the signature
        showSignature();
        // Clear the timer to avoid wasting resources
        window.clearInterval(updateTimer);
      }
    }
}, 60000); // 2 minutes in milliseconds
