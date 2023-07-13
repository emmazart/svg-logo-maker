class Shape {
    constructor(text, textColor, shape, fill) {
        this.textColor = textColor;
        this.text = text;
        this.shape = shape;
        this.fill = fill;
    }

    setColor(newfill){
        this.fill = newfill;
    }

}

class Triangle extends Shape {
    constructor(text, textColor, shape, fill){
        super(text, textColor, shape, fill);
    }

    render(){
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.fill}" />`
    }
}

class Square extends Shape {
    constructor(text, textColor, shape, fill) {
        super(text, textColor, shape, fill);
    }

    render(){
        return `<rect x="10" y="10" width="30" height="30" fill="${this.fill}"/>`
    }
}

class Circle extends Shape {
    constructor(text, textColor, shape, fill) {
        super(text, textColor, shape, fill);
    }

    render(){
        return `<circle cx="25" cy="75" r="20" fill="${this.fill}"/>`
    }
}

module.exports = { Triangle, Square, Circle };