const inputText = document.querySelector("#input-box");
const longest = document.querySelector("h2 span");
const button = document.querySelector("button");

function findLongestWord() {
    const words = inputText.value.split(" ");
    let longestWord = "";

    for(let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }
    return longestWord;
}

button.addEventListener('click', function() {
    longest.textContent = findLongestWord();
});

// Add enter key support
inputText.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        longest.textContent = findLongestWord();
    }
});

