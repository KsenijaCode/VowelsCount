const word = document.querySelector(".inputText");
const btn = document.querySelector(".btn");
const results = document.querySelector(".results");

btn.addEventListener("click", countVowel);

function countVowel() {
    let wordVal = word.value.toLowerCase()
    let vowelCount = 0

    for (let i = 0; i < wordVal.length; i++) {
        const letter = wordVal[i]

        if (letter.match(/([a,e,y,u,i,o])/)) {
            vowelCount++
        }
    }
    results.innerHTML = `${word.value.toUpperCase()} has ${vowelCount} vowels`
}