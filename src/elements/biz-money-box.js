// MONEY BOX DISPLAY FOR INDIVIDUAL BUSINESSES
import {MoneyDisplay} from "./money-display";
export class BizMoneyBox {

    // ADD LABEL "TOTAL" AND UPDATEABLE FIELD FOR MONEY TOTAL
    constructor(num, id) {
        this.bizMoneyBox = document.createElement('div');
        this.bizMoneyBox.setAttribute('id', id);
        this.bizMoneyBox.className = 'bizMoney';
        // component for money display //
        const moneyDisplay = new MoneyDisplay("EARNED: ", num);
        // append component //
        this.bizMoneyBox.appendChild(moneyDisplay.moneyDisplay);
    }

}




