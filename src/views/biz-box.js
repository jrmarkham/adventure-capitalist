
// biz box each display ui element for each business
// each business has two ui elements -- 2 buttons for
// direct earning and one for auto earnings
import {InfoBox} from "./info-box";
import {EarnButton} from "../elements/earn-button";
import {AutoEarnButton} from "../elements/auto-earn-button";
import {BizMoneyBox} from "../elements/biz-money-box";
import {UIController} from "../controls/ui-controller";

const uiController = new UIController();
export class BizBox {
    constructor(biz) {
        // core element
        this.bizBox = document.createElement('div');
        this.bizBox.className = 'bizBox';
        // LABEL
        // label text -- name of each business
        this.label = document.createElement('div');
        this.label.className = "bizLabel"
        this.label.innerText = biz.name.toUpperCase();



        // EARN BUTTON //
        // earn button triggers the earn function
        // sends the id to tha data and the data base
        // does all the work on the server side.
        const earnButton = new EarnButton(biz.id);

        // AUTO EARN //
        // earn when active sends the business id to the database
        // and the calculation are all updated server side.
        // if auto is on -- then add a message saying so
        // if auto is at capacity then activate the button
        // else button inactive.
        this.autoEarnElement = document.createElement('div');
        this.autoEarnElement.setAttribute('id', 'auto' + biz.id);
        this.autoEarnElement.className = 'autoEarnElement';

        // various stages for the auth earn state.
        // with more time would convert states into an
        // enum and the display into a component.
        if(biz.auto){
            this.autoEarnElement.innerText = "AUTO ON";
        }else if(Number(biz.total) < Number(biz.capacity)){
            this.autoEarnElement.innerText = "AUTO OFF";
        }else {
            const autoEarnButton = new AutoEarnButton(biz.id);
            this.autoEarnElement.appendChild(autoEarnButton.button);
        }


        // MONEY BOX
        // added money boz component for businesses //
        const moneyBox = new BizMoneyBox(biz.total, 'mb' + biz.id);
        // INFO BOX
        // Numerical values for each business for player to decide what businesses
        // to focus on. //
        const  infoBox = new InfoBox(biz);
        // append all elements //
        this.bizBox.appendChild(this.label);
        this.bizBox.appendChild(earnButton.button);
        this.bizBox.appendChild(this.autoEarnElement);
        this.bizBox.appendChild(moneyBox.bizMoneyBox);
        this.bizBox.appendChild(infoBox.infoBox);



    }


}



