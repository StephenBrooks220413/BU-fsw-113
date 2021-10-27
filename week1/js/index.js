function bankLetters(){
    let text;
    let favDrink = prompt("We have an important message for you, can I confirm your name please? Capitalize your first letter only!");
    switch(favDrink) {
        case "Brianna":
            text = `Hello, Brianna. Greetings from CashMoney Bank. Because you are such a great customer, we are lowering your interest rate to 2.7%.`;
            break;
        case "Dillon":
            text = `Hello, Dillon. This is an attempt to collect a debt due to CashMoney Bank. Your account is past due by the amount of $1014.94. `;
            break;
        case "Dimitri":
            text = 'Hello, Dimitri. Greetings from CashMoney Bank. Your balance is current. There is no need for action until next month.';
            break;
        default:
            text = "Hmm, it seems you are not on our announcements.";
            break;
    }
    document.getElementById("announcements").innerHTML = `<div class="letter">${text}</div>`;
}

bankLetters();