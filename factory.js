class Mobile {
    constructor(name, price) {
        this.catogery = 'Electronics';
        this.name = name;
        this.price = price;
    }

    get() {
        console.log(this.catogery, this.name, this.price);
    }
}

class Sofa {
    constructor(name, price) {
        this.catogery = 'Furniture';
        this.name = name;
        this.price = price;
    }

    get() {
        console.log(this.catogery, this.name, this.price);
    }
}

class ProductFactory {
    constructor() {
    }

    create(type, name, price) {
        if(type == 'mobile') {
            return new Mobile(name, price);
        } else if(type == 'sofa') {
            return new Sofa(name, price);
        }
    }
}

let pf = new ProductFactory();
let m = pf.create('mobile', 'Samsung Galaxy S10', 100000);
let s = pf.create('sofa', 'Neelkamal 5 seater', 50000);

m.get();
s.get();