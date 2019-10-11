class Point {
	constructor(x, y) {
	  this.x = x;
	  this.y = y;
	}
	get coordinate() {
        return '(' + this.x + ', ' + this.y + ')';
    }
}

class Line extends Point {
	  static distance(a, b) {
		let dx = a.x - b.x;
		let dy = a.y - b.y;
		return Math.hypot(dx, dy);
	  }
}


class Circle extends Point{
	constructor(x, y, radius) {
		super(x, y);
		this.radius = radius;
	}
	get diameter() {
		return this.radius * 2;
	}
	get length_circle() {
        return 2 * Math.PI * this.radius;
	}
	get area() {
		return Math.PI * this.radius * this.radius;
	}

}

class Oval extends Circle {
	constructor(x, y, radius, a) {
		super(x, y, radius);
		this.a = a;
	}
	get area() {
		return Math.PI * this.a * this.radius;
	}
	get focus() {
        return Math.sqrt(Math.pow(this.a, 2) - Math.pow(this.radius, 2))
    }
}

class Rectangle extends Line{
	constructor(x, y, x2, y2, x3, y3, x4, y4) {
		super(x, y);
		this.x2 = x2;
		this.y2 = y2;
		this.x3 = x3;
		this.y3 = y3;
		this.x4 = x4;
		this.y4 = y4;
	}
	
	get edge() {
		let a = new Point(this.x, this.y); 
		let b = new Point(this.x2, this.y2);
		let c = new Point(this.x3, this.y3); 
		let d = new Point(this.x4, this.y4);
		return a.coordinate + b.coordinate + c.coordinate + d.coordinate;
	}

	get width() {
	  	return Rectangle.side(new Point(this.x, this.y),new Point(this.x2, this.y2));
	}

	static side(a, b) {
		let sx = new Point(a.x, a.y);
		let sy = new Point(b.x, b.y);
		return Line.distance(sx, sy);
	}

	get height() {
		return Rectangle.side(new Point(this.x3, this.y3),new Point(this.x4, this.y4));
	}

	get area() {
	  	return this.width * this.height;
	}
}
   
document.write('<h3>Точка</h3>');
let p1 = new Point(3, 6);
	document.write('Координаты точки: ' + p1.coordinate + '<br>');

document.write('<h3>Линия</h3>');
let p2 = new Point(9, 12);
	document.write('Линия состоит из точек с координатами: ' + p1.coordinate + p2.coordinate + '<br>');
 	document.write('Длина линии: ' + Line.distance(p1, p2) + '<br>');

document.write('<h3>Окружность</h3>');
let circle = new Circle(5, 3, 10);
	document.write('Центр окружности: ' + circle.coordinate + '<br>');
	document.write('Радиус: ' + circle.radius + '<br>');
	document.write('Диаметр: ' + circle.diameter + '<br>');
	document.write('Длина окружности: ' + circle.length_circle + '<br>');
	document.write('Площадь окружности: ' + circle.area + '<br>');
	  
document.write('<h3>Эллипс</h3>');	
let oval = new Oval(5, 3, 5, 10);
	document.write('Центр овала: ' + oval.coordinate + '<br>');
	document.write('Малый радиус: ' + oval.radius + '<br>');
	document.write('Большой радиус: ' + oval.a + '<br>');
	document.write('Площадь овала: ' + oval.area + '<br>');
	document.write('Фокус овала: ' + oval.focus + '<br>');

document.write('<h3>Прямоугольник</h3>');
let square = new Rectangle(3, 6, 9, 12, 15, 17, 19, 21);
	document.write('Координаты точек: ' + square.edge + '<br>');
	document.write('Длина: ' + square.width + '<br>');
	document.write('Ширина: ' + square.height + '<br>');
	document.write('Площадь прямоугольника: ' + square.area + '<br>');