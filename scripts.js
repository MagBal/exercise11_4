function Phone(brand, price, color) {
    this.brand = brand;
    this.price = price;
    this.color = color;
}

function Dimensions(type, length, width, thickness, weight) {
    this.type = type;
    this.length = length;
    this.width = width;
    this.thickness = thickness;
    this.weight = weight;
}

Phone.prototype.printInfo = function() {
    console.log('The phone brand is ' + this.brand + ', color is ' + this.color + ' and the price is ' + this.price + '.');
};

Dimensions.prototype.showDimensions = function() {
    console.log('The ' + this.type + ' length is ' + this.length + ' mm, width is ' + this.width + ' mm, the thickness is ' + this.thickness + ' mm and the weight is ' + this.weight + ' g.');
}

var samsungGalaxyS6 = new Phone('Samsung', 1500, 'white');
var iPhone6S = new Phone('Apple', 1800, 'white');
var onetPlusOne = new Phone('Onet', 999, 'black');

samsungGalaxyS6.printInfo();
iPhone6S.printInfo();
onetPlusOne.printInfo();

samsungGalaxyS6 = new Dimensions('Samsung Galaxy S6', 1500, 600, 8, 150);
iPhone6S = new Dimensions('iPhone 6S', 1900, 900, 10, 200);
onetPlusOne = new Dimensions('OnetPlusOne', 1200, 400, 10, 150);

samsungGalaxyS6.showDimensions();
iPhone6S.showDimensions();
onetPlusOne.showDimensions();