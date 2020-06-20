// MAIN
// The main js file is the root document of the project
// this is use to scaffold the project. This sets up the ui
// elements and triggers the data class that will use elements
// passed to it to display and update data driven ui elements.

import {Header} from "./views/header";
import {BizBox} from "./views/biz-box";
import {MainMoneyBox} from "./elements/main-money-box";
import {PHPData} from "./data/PHPData";

const phpData = new PHPData();
export class Main {

    constructor() {

        //  container div for other ui elements
        this.mainDiv = document.createElement('div');
        // HEADER
        // header is the title component
        const header = new Header();

        // MAIN MONEY BOX
        // The money box is the display element for cash.
        // The top main display is the running total for the game.
        // Added to this display for when the earn button is active.
        // I also added dev test only reset button.
        // pass phpData reference so only one instance is used
        const moneyBox = new MainMoneyBox(0, 'mainMoney', phpData);
        /// RULES
        // Here I added a quick rules box for game. In a really game
        // all the text elements would be data driven and
        // localized.
        this.rulesDiv = document.createElement('div');
        this.rulesDiv.setAttribute('id', 'rules');
        this.rulesDiv.innerText = "Welcome to Adventure Capitalist. The rules are simple: make as much total money as you are able as fast as possible. You may press an 'Earn' button every 5 seconds. Once you have enough money earned for a particular business you may press the 'Auto Earn' button and you'll earn money every five minutes. If you wish to start over try the rest button. The numbers for the various business are described at the bottom of each business box."

        // BIZ ROW
        // This the container for all the businesses.
        // Each business is on a 'biz box' card for display and
        // updates.
        this.bizRow = document.createElement('div');

        // PHP DATA
        // Here the data component is initiated and the ui
        // elements are passed for the data to set up initial
        // displays and render updates to a controller.
        // pass phpData reference so only one instance is used
        phpData.getData(this.bizRow, BizBox);

        // append all elements //
        this.mainDiv.appendChild(header.title);
        this.mainDiv.appendChild(moneyBox.mainMoneyBox);
        this.mainDiv.appendChild(this.rulesDiv);
        this.mainDiv.appendChild(this.bizRow);

    }


}
