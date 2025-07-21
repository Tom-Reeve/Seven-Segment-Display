let parent = document.getElementById("parentWrapper");
let controller = new Controller(parent);

controller.initialise(8);

function showOnDisplay() {
    let day = new Date();

    let secs = day.getSeconds();
    secsOne = secs.toString().length === 2 ? secs.toString()[1] : secs;
    secsTen = secs.toString().length === 2 ? secs.toString()[0] : 0;
    let mins = day.getMinutes();
    minsOne = mins.toString().length === 2 ? mins.toString()[1] : mins;
    minsTen = mins.toString().length === 2 ? mins.toString()[0] : 0;
    let hrs = day.getHours();
    hrsOne = hrs.toString().length === 2 ? hrs.toString()[1] : hrs;
    hrsTen = hrs.toString().length === 2 ? hrs.toString()[0] : 0;

    let toShow = hrsTen + hrsOne + "-" + minsTen + minsOne + "-" + secsTen + secsOne;
    controller.show(toShow);

}
setInterval(showOnDisplay, 1);