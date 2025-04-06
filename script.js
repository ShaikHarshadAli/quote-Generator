const quotes = [
    "Stay hungry, stay foolish.",
    "Code is like humor. When you have to explain it, it’s bad.",
    "First, solve the problem. Then, write the code.",
    "Experience is the name everyone gives to their mistakes.",
    "In order to be irreplaceable, one must always be different."
];

function generateQuote() {
    const random = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').innerText = quotes[random];
}
