class SevenSegmentDisplay {
    constructor(parent, width) {
        this.parent = parent;
        this.width = width;

        this.display;
        this.segments = [];

        this.numberHex = [0x7e, 0x30, 0x6d, 0x79, 0x33, 0x5b, 0x5f, 0x70, 0x7f, 0x7b];
    }
    createDisplay() {
        let display = document.createElement("div");
        display.setAttribute("class", "displayContainer");
        display.style.width = this.width + "%";
        display.style.height = "100%";
        this.display = display;
        this.parent.appendChild(display);

        this.createSegments();
    }
    createSegments() {
        let segmentA = new Segment(60, 15, 17.5, 20, this.display, 0); //w, h, t, l
        let segmentB = new Segment(15, 60, 32.5, 80, this.display, 1);
        let segmentC = new Segment(15, 60, 107.5, 80, this.display, 1);
        let segmentD = new Segment(60, 15, 167.5, 20, this.display, 0);
        let segmentE = new Segment(15, 60, 107.5, 5, this.display, 1);
        let segmentF = new Segment(15, 60, 32.5, 5, this.display, 1);
        let segmentG = new Segment(60, 15, 92.5, 20, this.display, 0);

        this.segments.push(
            segmentA,
            segmentB,
            segmentC,
            segmentD,
            segmentE,
            segmentF,
            segmentG,
        )

        this.showSegments();
    }
    showSegments() {
        for (let i = 0 ; i < this.segments.length ; i++) {
            this.segments[i].show();
        }
    }
    getColour(val, shift) {
         return ((val >> shift) & 1);
    }
    highlight(number) {
        let hex = this.numberHex[number] || 0x01;
        for (let i = 0 ; i < this.segments.length ; i++) {
            let colour = this.getColour(hex, 6 - i);

            let segment = this.segments[i];
            if (colour) {
                segment.highlight();
            } else {
                segment.dehighlight();
            }
        }
    }
}