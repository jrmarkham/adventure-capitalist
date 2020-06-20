// PHP DATA
// DATA LOAD AND UPDATER
// I MADE EACH SERVER CALL IT'S OWN END POINT API -- not restful just posts and gets

import {UIController} from "../controls/ui-controller";
// GETS via FETCH
const _getInitData = 'https://sandbox.markhamenterprises.com/adv-cap/data-php/';
const _getNewTotals = 'https://sandbox.markhamenterprises.com/adv-cap/data-php/totals/';
const _getReset = 'https://sandbox.markhamenterprises.com/adv-cap/data-php/reset/';
// POSTS via PROMISE driven xhr (core browser http component)
const _postEarn = 'https://sandbox.markhamenterprises.com/adv-cap/data-php/earn/';
const _postAuto = 'https://sandbox.markhamenterprises.com/adv-cap/data-php/auto/';
// CONTROLLER FOR SENDING DATA UPDATE TO UI
const uiController = new UIController();

export class PHPData {
    constructor() {
        // init earn button to true
        this.earnButtonOn = true;
    }

    // GETS DATA FROM SERVER AND LOCALLY TO UPDATE GAME
    // fetch initial data called from main
   getData(bizRow, BizBox) {
        let total = 0;
        // load initial data from api //
        fetch(_getInitData).then((resp) => resp.json()).then(function (data) {
            console.log('DATA' + data);
            for (let idx in data) {
                // get data object
                const biz = data[idx];
                total += +biz.total;
                // add && create biz box w/ data and add to row //
                let bizBox = new BizBox(biz);
                bizRow.appendChild(bizBox.bizBox);
            }

        }).finally(()=>this.initialDataComplete(total));

    }
    // called once after the initial data is loaded
    initialDataComplete(total){
        uiController.setTotal(total);
        // with possible auto updates
        // check new data for auto earns
        setInterval(()=>this.getNewTotals(), 30000);
    }

    // resets the earn button (5 seconds)
    earnOn(){
        this.earnButtonOn = true;
        uiController.setEarnOn(this.earnButtonOn);
    }

    // post earn id // checks earn on
    // uses xhr and Promise
    postEarn(id){
        if(!this.earnButtonOn){
            alert('EARN OFF');
            return;
        }

        // set earn off and update ui
        this.earnButtonOn = false;
        uiController.setEarnOn(this.earnButtonOn);
        // TURN BACK ON IN 5 SECONDS
        setTimeout(()=>this.earnOn(), 5000);

        // do xhr request via Promise
        const xhr = new XMLHttpRequest();
        return new Promise(function(resolve, reject ){
            xhr.onreadystatechange = function () {
                // Only run if the request is complete
                if (xhr.readyState !== 4) return;
                // Process the response
                if (xhr.status >= 200 && xhr.status < 300) {
                    // successful
                    console.log('RESOLVED ');
                    resolve(xhr);
                } else {
                    // If failed
                    reject({
                        status: request.status,
                        statusText: request.statusText
                    });
                }

            };
            xhr.open("POST", _postEarn);
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr.send("id="+id);
        // on successful update get new data
        }).then(()=> this.getNewTotals()).catch((e)=>console.error('ERROR' + e.toString()));
    }

    // post auto earn on //
    // uses xhr and Promise
    postAuto(id){
        // do xhr request via Promise
        const xhr = new XMLHttpRequest();
        return new Promise(function(resolve, reject ){
            xhr.onreadystatechange = function () {
                // Only run if the request is complete
                if (xhr.readyState !== 4) return;
                // Process the response
                if (xhr.status >= 200 && xhr.status < 300) {
                    // If successful
                    console.log('RESOLVED ');
                    resolve(xhr);
                } else {
                    // If failed
                    reject({
                        status: request.status,
                        statusText: request.statusText
                    });
                }

            };
            xhr.open("POST", _postAuto);
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr.send("id="+id);
    // on successful update get new data
        }).then(()=> this.getNewTotals()).catch((e)=>console.error('ERROR' + e.toString()));
    }

    // call for new updates
    // need less data then initial loads
    getNewTotals(){
        let total = 0;
        fetch(_getNewTotals).then((resp) => resp.json()).then(function (data) {
            console.log('DATA' + data);
            for (let idx in data) {
                // get data object and sent to controller for ui updates
                const tots = data[idx];
                 total += +tots.total;
                 uiController.updateBiz(tots);
            }
        // send updates to control to update visuals
        }).finally(()=>uiController.setTotal(total));
    }

    // uses fetch //
    // reset game and get new totals //
    resetGame(){
        fetch(_getReset).then((resp) => resp.json()).finally(()=>this.getNewTotals());
    }
}

