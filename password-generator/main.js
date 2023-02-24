const form = document.querySelector(".form");
const passEle = document.querySelector(".password");
const passContainer = document.querySelector(".password__container");
const copyToClipBtn = document.querySelector(".password__copy");
const copyToClipEle = document.querySelector(".password__clipboard");
const alphabetArr = "abcdefghijklmnopqrstuvwxyz".split("");

const loopArr = (aDesiredLength, aGeneratedPass) => {
    for (let i = 0; i < aDesiredLength; i++) {
        aGeneratedPass.push(alphabetArr[Math.floor(Math.random() * 26)]);
    }
};

const generatePassword = (wantsSymbols, wantsCaps, desiredLength) => {
    const symbolsArr = "!$%^&+?".split("");
    let generatedPassword = [];

    for(let i = 0; i < desiredLength; i++){
        generatedPassword.push(alphabetArr[Math.floor(Math.random() * 26)]);
    }

    if(wantsCaps){
        for(let i = 0; i < generatedPassword.length; i++){
            let randomLetter = Math.floor(Math.random() * desiredLength)

            generatedPassword[randomLetter] = generatedPassword[randomLetter].toUpperCase();
        }
    }

    if (wantsSymbols) {
        for (let i = 0; i < Math.floor(desiredLength / 3); i++) {
            let startIndex = Math.floor(Math.random() * generatedPassword.length);
            let symbolIndex =
                symbolsArr[Math.floor(Math.random() * symbolsArr.length)];

            generatedPassword.splice(startIndex, 1, symbolIndex);
        }
    }

    return generatedPassword.join("");
};

copyToClipBtn.addEventListener("click", () => {
    passEle.select();
    document.execCommand("copy");

    copyToClipEle.classList.add("password__clipboard--success");
    copyToClipEle.style.webkitAnimation = "none";

    setTimeout(() => {
        copyToClipEle.style.webkitAnimation = "";
    }, 10);
});

form.addEventListener("submit", e => {
    const symbolsEle = document.querySelector(".form__checkbox--symbols").checked;
    const lengthEle = document.querySelector(".form__length").value;
    const capsEle = document.querySelector('.form__checkbox--caps').checked;

    passEle.setAttribute("value", generatePassword(symbolsEle, capsEle, lengthEle));

    if (!passContainer.classList.contains("password__container--visible")) {
        passContainer.classList.add("password__container--visible");
    }
    e.preventDefault();
    form.reset();
});
