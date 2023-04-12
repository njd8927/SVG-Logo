// parent class of shape with a constructor taking in text, textColor, shapeColor as params

class Shape {
    constructor(text, textColor, shapeColor){
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
    setColor(color) {
        this.color= color;

    }
}

// circle class extends shape class and inherits text, textColor, shapeColor

class Circle extends Shape {
    constructor(text, textColor, shapeColor){
        super(text, textColor, shapeColor);
    }

// render method to generate the circle 

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="https://www.w3.org/TR/SVG/">
        <circle cx="75" cy="75" r="30" fill="${this.shapeColor}"/>
        <text x="75" y="80" font-size="27" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
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
        return `<svg version="1.1" width="300" height="200" xmlns="https://www.w3.org/TR/SVG/">
        <polygon points="150,25 250,150 50,150" fill="${this.shapeColor}"/>
        <text x="145" y="100" font-size="27" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`
    }
};


class Square extends Shape {
    constructor(text, color){
        super(text, color);
    }

// render method to generate the square

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="https://www.w3.org/TR/SVG/">
        <rect x="90" y="90" width="100" height="100" fill="${this.shapeColor}"/>
        <text x="140" y="150" font-size="27" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`
    }
};


// export all circle classes using module.exports / use an object literal to group classes
module.exports = {
    Circle,
    Triangle,
    Square
};