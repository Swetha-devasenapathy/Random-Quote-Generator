const quotes = {
    "- Walt Disney": '"The Way Get Started Is To Quit Talking And Begin Doing."',
    "- Winston Churchill": '"The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty."',
    "- Vince Lombardi": '"It’s Not Whether You Get Knocked Down, It’s Whether You Get Up."',
    "- Mahatma Gandhi": '"Live as if you were to die tomorrow. Learn as if you were to live forever"',
    "- Babe Ruth": '"Every strike brings me closer to the next home run."',
    "- John Lennon": '"Life is what happens to you while you’re busy making other plans."',
    "- Earl Nightingale": '"We become what we think about."',
    "- Buddah": '"The mind is everything. What you think you become."',
    "- Vince Lombardi": '"Winning isn’t everything, but wanting to win is."',
    "- Stephen Covey": '"I am not a product of my circumstances. I am a product of my decisions. "',
    "- Christopher Columbus": '"You can never cross the ocean until you have the courage to lose sight of the shore."',
    "- Jim Rohn": '"Either you run the day, or the day runs you."',
    "- Henry Ford": '"Whether you think you can or you think you can’t, you’re right."',
    "- Frank Sinatra": '"The best revenge is massive success."',
}

document.getElementById('generate').addEventListener('click', () => {
    let authors = Object.keys(quotes);
    let author = authors[Math.floor(Math.random() * authors.length)];
    let quote = quotes[author];

    document.getElementById('quote').innerHTML = quote;
    document.getElementById('author').innerHTML = author;
});