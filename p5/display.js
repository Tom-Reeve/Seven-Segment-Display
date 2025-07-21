class Display {
    constructor(dispX, dispW, canvas) {
        this.dispX = dispX;
        this.dispW = dispW;
        this.canvas = canvas;

        this.dispY = (this.canvas - (11 * this.dispW) / 8) / 2;

        this.segments = this.createSegments();

        this.numberHex = [0x7e, 0x30, 0x6d, 0x79, 0x33, 0x5b, 0x5f, 0x70, 0x7f, 0x7b];
    }
    createSegments() {
        let short = this.dispW / 8;
        let long = this.dispW / 2;

        let segmentPos = {
            segmentA: {
                x: this.dispX + long / 2,
                y: this.dispY,
                w: long,
                h: short,
            },
            segmentB: {
                x: this.dispX + 1.5 * long,
                y: this.dispY + short,
                w: short,
                h: long,
            },
            segmentC: {
                x: this.dispX + 1.5 * long,
                y: this.dispY + 1.5 * long,
                w: short,
                h: long,
            },
            segmentD: {
                x: this.dispX + long / 2,
                y: this.dispY + 2.5 * long,
                w: long,
                h: short,
            },
            segmentE: {
                x: this.dispX + short,
                y: this.dispY + 1.5 * long,
                w: short,
                h: long,
            },
            segmentF: {
                x: this.dispX + short,
                y: this.dispY + short,
                w: short,
                h: long,
            },
            segmentG: {
                x: this.dispX + long / 2,
                y: this.dispY + long + short,
                w: long,
                h: short,
            },
        }
        return segmentPos;
    }
    showSegments(number) {
        noStroke();
        let hex = this.numberHex[number] || 0x01;

        const keys = Object.keys(this.segments);
        for (let i = 0 ; i < keys.length ; i++) {
            let segment = this.segments[keys[i]];

            fill(this.getColour(hex, 6 - i));
            rect(segment.x, segment.y, segment.w, segment.h);
        }
    }
    getColour(val, shift) {
        let r = 255;
        let g = 0;
        let b = 0;
        let a = 255 * ((val >> shift) & 1);
        return color(r, g, b, a);
    }
}