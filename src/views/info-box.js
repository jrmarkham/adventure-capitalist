
// info box component for the each biz box. displays the
// unique numerical features of each business.
// all display elements no ui. data set from initial load.
export class InfoBox {
    constructor(biz) {
        // main container element
        this.infoBox = document.createElement('div');
        this.infoBox.className = 'info';
        // earn rate
        this.infoEarnRate = document.createElement('div');
        this.infoEarnRate.innerText = "EARN RATE: " + biz.earn;
        // auto earn rate
        this.infoAutoEarnRate = document.createElement('div');
        this.infoAutoEarnRate.innerText = "AUTO RATE: " + biz.autoEarn;
        // aut earn capacity. totally need to trigger auto earn functions //
        this.infoAutoEarnCap = document.createElement('div');
        this.infoAutoEarnCap.innerText = "AUTO CAP: " + biz.capacity;

        // append all elements //

        this.infoBox.appendChild(this.infoEarnRate);
        this.infoBox.appendChild(this.infoAutoEarnRate);
        this.infoBox.appendChild(this.infoAutoEarnCap);
    }

}




