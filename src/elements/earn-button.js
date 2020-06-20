/// BUTTON  FOR EARNING
import {PHPData} from "../data/PHPData";

export class EarnButton {
    //  earn button send data update via id //
    constructor(id, earn) {
        this.label = document.createElement('button');
        this.label.innerText = "EARN";

        this.button = document.createElement('div');
        this.button.classNames = 'button, activeButton';
        this.button.appendChild(this.label);
        const phpData = new PHPData();
        this.button.onclick = ()=> phpData.postEarn(id, earn);



    }


}



