// BUTTON TO ENGAGE AUTO EARN
import {PHPData} from "../data/PHPData";
export class AutoEarnButton {
    // auto earn button send data update via id //
    constructor(id) {
        this.label = document.createElement('button');
        this.label.innerText = "AUTO EARN";
        this.button = document.createElement('div');
        this.button.className = 'autoEarnButton';
        this.button.appendChild(this.label);
        const phpData = new PHPData();
        this.button.onclick = ()=> phpData.postAuto(id);
    }


}



