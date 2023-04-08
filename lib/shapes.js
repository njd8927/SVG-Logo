class Circle {
    constructor(text, textColor, shape, shapeColor){
        this.text = text;
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor;
    }
};


class Triangle extends Circle {
    constructor(text, textColor, shape, shapeColor){
        super(text, textColor, shape, shapeColor);
    }
};


class Square extends Circle {
    constructor(text, textColor, shape, shapeColor){
        super(text, textColor, shape, shapeColor);
    }
};




module.exports = shapes.js