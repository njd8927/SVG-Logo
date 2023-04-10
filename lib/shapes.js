class Shape {
    constructor(text, textColor, shapeColor){
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
}

class Circle extends Shape{
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
};


class Square extends Shape {
    constructor(text, textColor, shapeColor){
        super(text, textColor, shapeColor);
    }
};



module.exports = {
    Circle,
    Triangle,
    Square
}