// console.log(alert('GoodBye'))

const randomMessages = [
        "Believe you can and you're halfway there",
        "Dream big and dare to fail",
        "Act as if what you do makes a difference. It does",
        "Success is not final, failure is not fatal: It is the courage to continue that counts",
        "The only way to do great work is to love what you do",
        "Start where you are. Use what you have. Do what you can",
        "Don’t watch the clock; do what it does. Keep going",
        "The best way to predict the future is to create it",
        "You miss 100% of the shots you don’t take",
        "It always seems impossible until it’s done",
        "What you get by achieving your goals is not as important as what you become by achieving your goals",
        "Hardships often prepare ordinary people for an extraordinary destiny",
        "Believe in yourself and all that you are",
        "The future belongs to those who believe in the beauty of their dreams",
        "Don’t be afraid to give up the good to go for the great",
        "If you want to lift yourself up, lift up someone else",
        "Success usually comes to those who are too busy to be looking for it",
        "The only limit to our realization of tomorrow is our doubts of today",
        "You are never too old to set another goal or to dream a new dream",
        "Keep your face always toward the sunshine—and shadows will fall behind you",
];
const luckyNumbers = [3, 7, 9, 11, 13, 18, 21, 25, 27, 33, 42, 45, 50, 54, 66, 72, 77, 81, 88, 99];
const astrologySigns = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];
const trueRandom = { randomMessages, luckyNumbers, astrologySigns };

let button = document.getElementById('submit');
let message = document.getElementById('message');
let randomNum = Math.floor(Math.random() * 20);
let randomSigns = Math.floor(Math.random() * astrologySigns.length);

const messageGen = () => {
    message.innerHTML = `Sign: ${astrologySigns[randomSigns]} - Number: ${luckyNumbers[randomNum]} - Message: ${randomMessages[randomNum]}.`;
}
button.addEventListener('click', messageGen);