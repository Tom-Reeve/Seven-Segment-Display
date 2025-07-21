class Segment {
    constructor(width, height, top, left, parent, vertical) {
        this.width = width + "px";
        this.height = height + "px";
        this.top = top + "px";
        this.left = left + "px";
        this.parent = parent;

        this.vertical = vertical;

        this.element = this.createSegment();
    }
    createSegment() {
        let long = this.width / 2;
        let short = this.width / 8;

        let segment = document.createElement("div");
        segment.classList.add("segment");
        if (this.vertical) {
            segment.classList.add("vertical");
        } else {
            segment.classList.add("horizontal");
        }

        segment.style.width = this.width;
        segment.style.height = this.height;
        segment.style.top = this.top;
        segment.style.left = this.left;

        return segment;
    }
    show() {
        this.parent.appendChild(this.element);
    }
    highlight() {
        this.element.classList.add("highlight");
    }
    dehighlight() {
        this.element.classList.remove("highlight");
    }
}