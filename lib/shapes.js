// parent class of shape with a constructor taking in text, textColor, shapeColor as params

class Shape {
    constructor(text, textColor, shapeColor){
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
}

// circle class extends shape class and inherits text, textColor, shapeColor

class Circle extends Shape {
    constructor(text, textColor, shapeColor){
        super(text, textColor, shapeColor);
    }

// render method to generate the circle 

    render() {
        return `<svg version="1.1" width="150" height="150" xmlns="https://www.w3.org/TR/SVG/">
        <circle cx="75" cy="75" r="20" fill="${this.shapeColor}"/>
        <text x="75" y="75" font-size="28" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`
    }
};

// triangle class extends shape class and inherits text, textColor, shapeColor

class Triangle extends Shape {
    constructor(text, textColor, shapeColor){
        super(text, textColor, shapeColor);
    }

// render method to generate the triangle

    render() {
        return `<svg version="1.1" width="150" height="150" xmlns="https://www.w3.org/TR/SVG/">
        <polygon points="50, 160 55, 180 70, 180 60, 190 65, 205 50, 195 35, 205 40, 190 30, 180 45, 180" fill="${this.shapeColor}"/>
        <text x="75" y="75" font-size="28" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`
    }
};


class Square extends Shape {
    constructor(text, textColor, shapeColor){
        super(text, textColor, shapeColor);
    }

// render method to generate the square
    
    render() {
        return `<svg version="1.1" width="150" height="150" xmlns="https://www.w3.org/TR/SVG/">
        <rect x="10" y="10" width="30" height="30" fill="${this.shapeColor}"/>
        <text x="75" y="75" font-size="28" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`
    }
};


// export all circle classes using module.exports / use an object literal to group classes
module.exports = {
    Circle,
    Triangle,
    Square
};