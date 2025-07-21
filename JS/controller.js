class Controller {
    constructor(parent) {
        this.parent = parent;

        this.displays = [];
        this.interval;
    }
    initialise(count) {
        let width = 100 / count;

        for (let i = 0 ; i < count ; i++) {
            let display = new SevenSegmentDisplay(this.parent, width);
            display.createDisplay();

            this.displays.push(display);
        }
    }
    show(number) {
        let digits = number.toString().split("");
        for (let i = 0 ; i < this.displays.length ; i++) {
            let display = this.displays[i];
            display.highlight(digits[i]);
        }
    }
}