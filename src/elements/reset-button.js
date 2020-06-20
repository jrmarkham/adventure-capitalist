

/// RESET DATA BUTTON
export class ResetButton {
    constructor(phpData) {
        this.label = document.createElement('button');
        this.label.innerText = "RESET";

        this.button = document.createElement('div');
        this.button.classNames = 'activeButton';
        this.button.appendChild(this.label);

        this.button.onclick = ()=> phpData.resetGame();
    }


}



