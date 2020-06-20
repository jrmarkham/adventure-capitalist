// simple header component for the title element
export class Header {
    constructor() {
        this.title = document.createElement('div');
        this.title.setAttribute('id', 'title');
        this.title.innerText = "Adventure Capitalist";
    }

}
