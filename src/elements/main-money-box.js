

// MONEY BOX DISPLAY FOR GAME
// ADDED EXTRAS
// EARN BUTTON ACTIVE TOGGLE
// AND RESET BUTTON
import {ResetButton} from "./reset-button";
import {MoneyDisplay} from "./money-display";

export class MainMoneyBox {

     constructor(num, id) {
        this.mainMoneyBox = document.createElement('div');
        this.mainMoneyBox.setAttribute('id', id);

        const moneyDisplay = new MoneyDisplay("TOTAL: ", num);
        // earn on notifier
        // updates when boolean changes in data //
        this.earnOn = document.createElement('div');
        this.earnOn.setAttribute('id', 'earnOn');
        this.earnOn.innerText = "EARN IS ON";
        // ADD RESET
        // simple button to call reset on the data
        const resetButton = new ResetButton();

        this.mainMoneyBox.appendChild(moneyDisplay.moneyDisplay);
        this.mainMoneyBox.appendChild(this.earnOn);
        this.mainMoneyBox.appendChild(resetButton.button);
    }

}




