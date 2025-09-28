console.log("This is my Script.");
let result = {
    "tag": "",
    "free": false,
    "role": false,
    "user": "akshaykumar",
    "email": "akshayKumar@gmail.com",
    "Score": 0.64,
    "state": "undeliverable",
    "domain": "gmail.com",
    "reason": "invalid_mailbox",
    "mx_found": true,
    "catch_all": null,
    "disposable": null,
    "smpt_check": false,
    "did_you_mean": "",
    "format_valid": true,
};

let resultcont = document.getElementById("resultcont");
Submitbtn = document.getElementById("submitbtn");




Submitbtn.addEventListener('click', async (e) => {
    e.preventDefault();
    console.log("You have clicked the submit button");
    resultcont.innerHTML = `<img width="233" src="Spinner@1x-1.0s-200px-200px.svg"/>`
    let key = "ema_live_0ieLMEJwSrYC6kgSuoekdSRGT59W9AAK1xJQoUyi"

    let email = document.getElementById("username").value;


    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;

    let res = await fetch(url);
    let result = await res.json();

    let str = ``;
    for (key of Object.keys(result)) {

        str = str + `<div>${key} : ${result[key]}</div>`;
    }
    resultcont.innerHTML = str;

});




