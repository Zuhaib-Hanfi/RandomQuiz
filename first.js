const islamicQuiz = [
    {
        question: "What is the first pillar of Islam?",
        options: ["Salah", "Zakat", "Shahada", "Hajj"],
        correctAnswer: "Shahada"
    },
    {
        question: "How many Rak'ahs are in Fajr prayer?",
        options: ["2", "3", "4", "5"],
        correctAnswer: "2"
    },
    {
        question: "What is the holy book of Islam?",
        options: ["Bible", "Torah", "Quran", "Vedas"],
        correctAnswer: "Quran"
    },
    {
        question: "Who was the last prophet in Islam?",
        options: ["Prophet Isa", "Prophet Musa", "Prophet Muhammad", "Prophet Ibrahim"],
        correctAnswer: "Prophet Muhammad"
    },
    {
        question: "In which month do Muslims fast during the day?",
        options: ["Muharram", "Ramadan", "Dhul-Hijjah", "Shawwal"],
        correctAnswer: "Ramadan"
    },
    {
        question: "What is the name of the night journey of Prophet Muhammad (PBUH)?",
        options: ["Isra and Miraj", "Hijra", "Badr", "Uhud"],
        correctAnswer: "Isra and Miraj"
    },
    {
        question: "How many chapters (Surahs) are there in the Quran?",
        options: ["100", "114", "99", "120"],
        correctAnswer: "114"
    },
    {
        question: "What is the meaning of 'Islam'?",
        options: ["Peace", "Submission", "Faith", "Prayer"],
        correctAnswer: "Submission"
    },
    {
        question: "Which angel brought revelation to Prophet Muhammad (PBUH)?",
        options: ["Angel Jibreel", "Angel Mikail", "Angel Israfil", "Angel Azrael"],
        correctAnswer: "Angel Jibreel"
    },
    {
        question: "Which direction do Muslims face when they pray?",
        options: ["Towards Madinah", "Towards the East", "Towards the Kaaba", "Towards the West"],
        correctAnswer: "Towards the Kaaba"
    },
    {
        question: "What is the second pillar of Islam?",
        options: ["Salah", "Zakat", "Sawm", "Hajj"],
        correctAnswer: "Salah"
    },
    {
        question: "What is the largest mosque in the world?",
        options: ["Al-Aqsa Mosque", "Al-Masjid an-Nabawi", "Masjid al-Haram", "Sultan Ahmed Mosque"],
        correctAnswer: "Masjid al-Haram"
    },
    {
        question: "Who was the first Caliph of Islam?",
        options: ["Umar ibn Khattab", "Ali ibn Abi Talib", "Abu Bakr As-Siddiq", "Uthman ibn Affan"],
        correctAnswer: "Abu Bakr As-Siddiq"
    },
    {
        question: "How many daily prayers (Salah) are obligatory for Muslims?",
        options: ["3", "4", "5", "6"],
        correctAnswer: "5"
    },
    {
        question: "What is the Arabic word for charity, which is also a pillar of Islam?",
        options: ["Sadaqah", "Zakat", "Khums", "Fidyah"],
        correctAnswer: "Zakat"
    },
    {
        question: "Which Surah is known as the 'Heart of the Quran'?",
        options: ["Surah Al-Fatiha", "Surah Al-Baqarah", "Surah Al-Mulk", "Surah Yasin"],
        correctAnswer: "Surah Yasin"
    },
    {
        question: "How many months are in the Islamic (Hijri) calendar?",
        options: ["10", "11", "12", "13"],
        correctAnswer: "12"
    },
    {
        question: "Which Prophet built the Kaaba with his son?",
        options: ["Prophet Musa", "Prophet Isa", "Prophet Ibrahim", "Prophet Yusuf"],
        correctAnswer: "Prophet Ibrahim"
    },
    {
        question: "Which battle is considered the first major battle in Islam?",
        options: ["Battle of Uhud", "Battle of Badr", "Battle of Khandaq", "Battle of Hunayn"],
        correctAnswer: "Battle of Badr"
    },
    {
        question: "Which city was Prophet Muhammad (PBUH) born in?",
        options: ["Madinah", "Jerusalem", "Makkah", "Baghdad"],
        correctAnswer: "Makkah"
    }
];

let fiveRandom = new Set();
while (fiveRandom.size < 5) {
    let ind = Math.floor(Math.random() * 20);
    fiveRandom.add(islamicQuiz[ind]);
}
fiveRandom = Array.from(fiveRandom);

// Here Creation part begins

const form = document.querySelector('form');

let answers = {};
fiveRandom.forEach((element, index) => {

    answers[`Q${index + 1}`] = element.correctAnswer;

    const div = document.createElement('div');
    div.className = 'question';
    form.appendChild(div);

    const p = document.createElement('p');
    p.innerHTML = `${index + 1}. ${element.question}`;

    div.appendChild(p);

    let array = element.options;
    for (let val of array) {
        const label = document.createElement('label');
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = `Q${index + 1}`;
        // input.value=fiveRandom[0].options[0];
        input.value = val;
        label.appendChild(input);
        const textNode = document.createTextNode(val);
        label.appendChild(textNode);

        div.appendChild(label);
        const lineBreak = document.createElement('br');
        div.appendChild(lineBreak);
    }

});

const buttonDiv = document.createElement('div');
buttonDiv.id = 'Buttons';
const resetButton = document.createElement('button');
resetButton.type = 'reset';
resetButton.id = 'b1';
resetButton.innerHTML = 'Reset';
const submitButton = document.createElement('button');
submitButton.type = 'submit';
submitButton.id = 'b2';
submitButton.innerHTML = 'Submit';

buttonDiv.append(resetButton, submitButton);
form.appendChild(buttonDiv);

console.log(answers);
//Here comes Checking part

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = new FormData(form);

    let res = 0
    for (let [key, val] of data.entries()) {
        if (val === answers[key]) res++;
    }

    const score = document.getElementById('score');
    if (res == 5) {
        score.style.color = 'Red';
        score.innerHTML = `Full Marks 5/5`;
    }
    else {
        score.style.color = 'Brown'
        score.innerHTML = `You've Scored ${res}/5`;
    }
});

const reset = document.querySelector('button');
reset.addEventListener('click', () => {
    location.reload();
})