// GENERIC MONEY DISPLAY COMPONENTS
// HAS LABEL AND VALUE SETTINGS
export class MoneyDisplay {

    constructor(name, num) {


        this.moneyDisplay = document.createElement('div');

        this.label = document.createElement('span');
        this.label.innerText = name;

        this.value = document.createElement('span');
        this.value.className = 'total';
        this.value.innerText = "$" + num.toString().trim();

        this.moneyDisplay.appendChild(this.label);
        this.moneyDisplay.appendChild(this.value);

    }

}
