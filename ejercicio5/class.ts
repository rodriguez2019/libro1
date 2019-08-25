class Shape {

    area: number;
    private color: string;

    constructor ( public name: string, width: number, height: number ) {
        this.area = width * height;
        this.color = "pink";
    };

    shoutout(){
        return "I'm " + this.color + " " + this.name + " with an area of " + this.area + " cm squared.";
    }
}

class Shape3D extends Shape {

    volume: number;

    constructor (public name: string, width: number, height: number, lenght: number) {
        super ( name, width, height );
        this.volume = lenght * this.area;
    };

    shoutout(){
        return "I'm " + this.name + " with a volume of " + this.volume + " cm cube.";
    }

    superShout() {
        return super.shoutout();
    }
}

var cube = new Shape3D("cube", 30, 30, 30);
console.log( cube.shoutout() );
console.log ( cube.superShout() );