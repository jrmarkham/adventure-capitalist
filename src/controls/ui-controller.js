// UI Controller //
// does updates called from the data component

import {AutoEarnButton} from "../elements/auto-earn-button";
export class UIController{
    constructor() { }
    // SET EARN ON
    // simple toggle based on boolean
    setEarnOn(bool){
        const earnOnDiv = document.getElementById('earnOn');
        earnOnDiv.innerText = bool? "EARN IS ON":  "EARN IS OFF";
    }

    // UPDATE TOTAL MONEY DISPLAY
    // gets id for main money boxes then redirects to global money updater
    setTotal(total) {
        const mainMoneyTotal = document.getElementById('mainMoney');
        this.updateMoney(mainMoneyTotal, total);
    }


    // UPDATE BIZ
    // check updates for money and change in auto earn state
    updateBiz(biz, phpData){
        this.setBizEarnings('mb'+biz.id, biz.total);
        this.setAutoEarnDiv(biz, phpData);
    }
    // UPDATE TOTAL AN EARNINGS DISPLAY
    // get money element for biz money box and the send to global updates
    setBizEarnings(id, total){
        const bizMoney = document.getElementById(id);
        this.updateMoney(bizMoney, total);
    }


    // UPDATE AUTO DISPLAY
    // update auto display state
    setAutoEarnDiv(biz){
        const autoEarnElement = document.getElementById('auto'+biz.id);
        // empty element
        autoEarnElement.innerHTML = "";
        // replace w/ new stuff
        if(biz.auto){
            autoEarnElement.innerText = "AUTO ON";
        }else if(Number(biz.total) < Number(biz.capacity)){
            autoEarnElement.innerText = "AUTO OFF";
        }else{
            const autoEarnButton = new AutoEarnButton(biz.id);
            autoEarnElement.appendChild(autoEarnButton.button);
        }
    }


    /// UPDATE ANY DISPLAY FOR MONEY
    // global function for money updates
    updateMoney(element, num){
        const  value = element.getElementsByClassName('total').item(0);
        value.innerText = "$" + num.toString().trim();
    }



}
