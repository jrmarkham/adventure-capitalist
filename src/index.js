// Index js is the launch file for the project;
// here it launched the main js file and
// a single style sheet is used. for larger projects
// multiple styles will be employed; usually a style sheet
// per class or at least category.

import {Main} from  "./main";
import "./styles/main.scss";
const main = new Main();
document.querySelector('body').appendChild(main.mainDiv);

