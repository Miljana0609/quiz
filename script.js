const questions = [
    {
      question: "Vilket språk är mitt 'modersmål' i backend?",
      answers: ["Python", "Java", "C++"],
      correct: 1,
      image: "https://media.giphy.com/media/13HgwGsXF0aiGY/giphy.gif",
      resultText: "Yes! Java är min grej 🚀 Jag bygger robusta system i Java och har koll på allt från grunderna till Spring Boot och Docker!"
    },
    {
      question: "Vilket verktyg använder jag för att samarbeta med kollegor?",
      answers: ["Git", "Excel", "Photoshop"],
      correct: 0,
      image: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdm13MDJpdnpxdTZsc3hsdWFzNDRndHY2dGdrcHFnMTl6Zjh0N251ZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/VePtB3roynxfLYicuV/giphy.gif",
      resultText: "Versionhantering och samarbete i Git är en självklarhet 😁"
    },
    {
      question: "Var trivs mina applikationer bäst när de ska driftsättas?",
      answers: ["I molnet", "På ett USB-minne", "På min gamla Nokia"],
      correct: 0,
      image: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExc2N6cGt0a3pnOWZiOXdueW04ZXJzaHNvM3BiMWMzNWtseDlzZXBzZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WoqIEpOqZIRQHrtbQ5/giphy.gif",
      resultText: "Jag läser Javautveckling med molninriktning. Molnet är framtiden och jag kommer lära mig bemästra både AWS och Azure! ☁️"
    },
    {
        question: "Vad pysslar jag med just nu i min utbildning?",
        answers: ["Lagar datorer", "SQL", "Frontend"],
        correct: 2,
        image: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExejFiMmY3Zmh5ZWk5ZGc4OWJkemIyaGdzMDNmeDBkdGFkbGQyY3BqayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/13FrpeVH09Zrb2/giphy.gif",
        resultText: "Efter en djupdykning i backend och SQL utforskar jag nu frontend världen för att bli en vass Fullstack-utvecklare."
      },
      {
        question: "När är jag redo att komma ut och bidra på en riktig arbetsplats?",
        answers: ["Imorgon", "Hösten 2026", "Vår 2027"],
        correct: 1,
        image: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXNrMjJvczF1OHpjYjhiczNncWF6eXZjYjVzZXNmajY1dHE0N3BhaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MZEIaQ799hT1VXMqz8/giphy.gif",
        resultText: "Jag letar efter en spännande LIA-plats (Lärande i arbete / praktik) inför hösten 2026 där jag kan få visa vad jag går för på riktigt!"
      },
      {
        question: "Vad är min favorit hobby utanför kodandet?",
        answers: ["Resa", "Spela spel", "Laga mat"],
        correct: 0,
        image: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExenk0MmhrZHpmbTQxajVyanhpb2w4cjJla3F2ZGtpbGk4dTFsd3FrbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/KCdXOVBvvEqeWzFNf8/giphy.gif",
        resultText: "Alla svar är roliga, men min favorit är att resa och upptäcka nya platser och kulturer. Fun Fact: Jag har bilat genom nästan hela Europa! "
      },
      {
        question: "Hur gammal är jag?",
        answers: ["30", "24", "26"],
        correct: 2,
        image: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGc0d3k1YXlneWlxeXI1dG1iZWd5a2g5bG85bmVtejdva29na2cyYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/U4MoCMmeqqJKAKODtS/giphy.gif",
        resultText: "26 år! 😳"
      },
      {
        question: "Hur lång är jag?",
        answers: ["170cm", "165cm", "185cm"],
        correct: 1,
        image: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHEweWUyZG82aWRjMGI1aTI4djNzMnp6MXM4bHE0bG11dGYxOGN2biZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/L8hdZuf5cJ7mo/giphy.gif",
        resultText: "Jag är 165cm lång och ibland behövs det en pall i köket 😄"
      },
      {
        question: "Jag vann ett pris 2019, vilket?",
        answers: ["OS-guld i 100m", "Årets medarbetare på McDonald's", "TV-triss"],
        correct: 1,
        image: "images/image00.jpeg",
        resultText: "Yesss! Jag blev inte bara årets medarbetare, utan utbildade mig även till arbetsledare! Det gav mig ett driv och ett ledarskap jag tar med mig in i IT-världen."
      },
      {
        question: "Vad är mitt stora mål efter examen?",
        answers: ["Bli en grym fullstack-utvecklare", "Flytta till Mars", "Öppna en korvkiosk"],
        correct: 0,
        image: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHlkODducTYyb203M3Zibnh3MTJ2NjQ2Z3k4c2o3YWtvc2Zhc2FsNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3ohzgSHpvk6b8M7f9e/giphy.gif",
        resultText: "Bli en grym Fullstack-utvecklare såklart 😀 Men okej, en korvkiosk på sidan om hade inte varit fel heller 🤣"
      },
  ];
  
  let currentQuestion = 0;
  let growFactor = 1;
  
  function startQuiz() {
    document.getElementById("start-screen").classList.add("hidden");
    document.getElementById("quiz-screen").classList.remove("hidden");
    showQuestion();
  }
  
  function showQuestion() {
    growFactor = 1;
  
    const question = questions[currentQuestion];
  
    document.getElementById("question-number").innerText =
      `Fråga ${currentQuestion + 1} av ${questions.length}`;
  
    document.getElementById("question-text").innerText =
      question.question;
  
    const answersDiv = document.getElementById("answers");
    answersDiv.innerHTML = "";
  
    question.answers.forEach((answer, index) => {
      const btn = document.createElement("button");
      btn.innerText = answer;
      btn.classList.add("answer-btn");
      btn.onclick = () => selectAnswer(index);
      answersDiv.appendChild(btn);
    });
  
    updateProgress();

    const nextBtn = document.getElementById("next-btn");
    if(currentQuestion === question.length - 1) {
        nextBtn.innerText = "Lämna in"
        nextBtn.onclick = finishQuiz;
    } else {
        nextBtn.innerText = "Nästa fråga";
        nextBtn.onclick = nextQuestion;
    }
  }
  
  function selectAnswer(index) {
    const question = questions[currentQuestion];
  
    if (index === question.correct) {
      document.getElementById("quiz-screen").classList.add("hidden");
      document.getElementById("result-screen").classList.remove("hidden");
  
      document.getElementById("result-text").innerText =
        question.resultText;
  
      document.getElementById("result-image").src =
        question.image;
  
    } else {
      growFactor += 0.2;
      const buttons = document.querySelectorAll(".answer-btn");
      buttons[question.correct].style.transform =
        `scale(${growFactor})`;
    }
  }
  
  function nextQuestion() {
    currentQuestion++;
  
    if (currentQuestion >= questions.length) {
      document.getElementById("result-screen").classList.add("hidden");
      document.getElementById("end-screen").classList.remove("hidden");
    } else {
      document.getElementById("result-screen").classList.add("hidden");
      document.getElementById("quiz-screen").classList.remove("hidden");
      showQuestion();
    }
  }
  
  function updateProgress() {
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    document.getElementById("progress-bar").style.width = progress + "%";
  }
  function showQuestion() {
    growFactor = 1;

    const question = questions[currentQuestion];

    document.getElementById("question-number").innerText =
      `Fråga ${currentQuestion + 1} av ${questions.length}`;

    document.getElementById("question-text").innerText =
      question.question;

    const answersDiv = document.getElementById("answers");
    answersDiv.innerHTML = "";

    question.answers.forEach((answer, index) => {
      const btn = document.createElement("button");
      btn.innerText = answer;
      btn.classList.add("answer-btn");
      btn.onclick = () => selectAnswer(index);
      answersDiv.appendChild(btn);
    });

    updateProgress();

    const nextBtn = document.getElementById("next-btn");
    if (currentQuestion === questions.length - 1) {
        nextBtn.innerText = "Lämna in";
        nextBtn.onclick = finishQuiz;
    } else {
        nextBtn.innerText = "Nästa fråga";
        nextBtn.onclick = nextQuestion;
    }
}

function restartQuiz() {
    currentQuestion = 0;

    document.getElementById("end-screen").classList.add("hidden");
    document.getElementById("quiz-screen").classList.remove("hidden");

    updateProgress();
    showQuestion();
}
  