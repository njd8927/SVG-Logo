class Shape {
    constructor(text, textColor, shapeColor){
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
}

class Circle extends Shape {
    constructor(text, textColor, shapeColor){
        super(text, textColor, shapeColor);
    }

    render() {
        return `<svg version="1.1" width="150" height="150" xmlns="http://www.w3.org/2000/svg">
        <circle cx="75" cy="75" r="20" fill="${this.shapeColor}"/>
        <text x="75" y="75" font-size="28" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`
    }
};


class Triangle extends Shape {
    constructor(text, textColor, shapeColor){
        super(text, textColor, shapeColor);
    }

    render() {
        return `<svg version="1.1" width="150" height="150" xmlns="http://www.w3.org/2000/svg">
        <polygon points="50, 160 55, 180 70, 180 60, 190 65, 205 50, 195 35, 205 40, 190 30, 180 45, 180" fill="${this.shapeColor}"/>
        <text x="75" y="75" font-size="28" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`
    }
};


class Square extends Shape {
    constructor(text, textColor, shapeColor){
        super(text, textColor, shapeColor);
    }

    render() {
        return `<svg version="1.1" width="150" height="150" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="10" width="30" height="30" fill="${this.shapeColor}"/>
        <text x="75" y="75" font-size="28" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`
    }
};



module.exports = {
    Circle,
    Triangle,
    Square
};