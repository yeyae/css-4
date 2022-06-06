const quotes = [
{
    quote: "Passion makes the world go round. Love just makes it a safer place.", 
    author: "Ice T",

},
{
    quote: "Whenever you are asked if you can do a job, tell 'em, 'Certainly I can!' Then get busy and find out how to do it.",
    author: "Theodore Roosevelt",

},
{
    quote: "All my possessions for a moment of time.",
    author: "Elizabeth I",

},
{
    quote: "The future is much like the present, only longer.",
    author: "Dan Quisenberry",

},
{
    quote: "Time is the most valuable thing a man can spend.",
    author: "Theophrastus",

},
{
    quote: "I find nothing more depressing than optimism.",
    author: "Paul Fussell",

},
{
    quote: "Hide not your talents. They for use were made. What's a sundial in the shade.",
    author: "Benjamin Franklin",

},
{
    quote: "The important thing was to love rather than to be loved.",
    author: "William Somerset Maugham",

},
{
    quote: "Honesty is the only way with anyone, when you'll be so close as to be living inside each other's skins.",
    author: "Lois McMaster Bujold",

},
{
    quote: "United we stand, divided we fall.",
    author: "Aesop",

}
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote=quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;