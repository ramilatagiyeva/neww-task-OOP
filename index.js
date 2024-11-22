// Car adinda class yaradin daxilinde brand(markasi : Toyata ornek) i olsun modeli year price color percent(faizi) olsun

class Car {
    constructor (brand, model, year, price, color, percent) {
       this.brand = brand
       this.model = model
       this.year = year 
       this.price = price
       this.color = color
       this.percent = percent
    }
    // getDetail adinda func olsun masin haqqinda melumatlari logda gostersin
      getDetail() {
        console.log(`bura ne yazacagimi ${this.brand} ${this.model} ${this.year} ${this.price} ${this.color} ${this.percent} bilmedim`);
        
      }

// faizi hesablayacaq function olsun yeni pricenin qiymetini goturub
//  verilen faize gore yeni qiymetini tapib menimsetsin priceye 
      calcPrice() {
        const discount = (this.percent / 100) * this.price; 
        const newPrice = this.price - discount; 
        this.price = newPrice; 
        console.log(`Yeni qiymət: ${this.price}`);
    }

}
// SportsCar  adindan class yaradin ve car dan extend etsin
class SportsCar extends Car {
// sportCara da cardaki deyisenler elave olunsun elave olaraqda topSpeed elave olunsun
       constructor (brand, model, year, price, color, percent, speed, toSpeed) {
       super(brand, model, year, price, color, percent)
       this.speed = this.speed
       this.toSpeed = toSpeed 
       }
      // daxilinde getDetail adinda func olsun superden isdifade edib extend olunan detail melumatini
       // goturun elave olaraq maksimum suretinide qeyd edin
       getDetail() {
        const carDetails = super.getDetail();
        return `${carDetails} ${this.horsePower} at gücü və ${this.topSpeed} km/s maksimum sürətə malikdir.`;
    }
       // daxilinde incrementSpeed adinda metod olsun ve sureti 10% artirsin 
      incrementSpeed() {
        const increment = 0.1 * this.topSpeed;
        this.topSpeed += increment;
        console.log(`Yeni maksimum sürət: ${this.topSpeed} km/s`);
      }
 }

 const sportsCar1 = new SportsCar("Mercedes", "E 220", 2020, 26700, "Qara", 10, 660, 330);

// butun functionlari cagirib logda gosterin masinin qiymeti sonra endirimli qiymeti
// masinin sureti artiriliqdan sonra sureti ve.s 
console.log(`evvelki qiymet: ${sportsCar1.price}`);
console.log(sportsCar1.getDetail());
sportsCar1.calcPrice();
sportsCar1.incrementSpeed();
console.log(sportsCar1.getDetail());
// 1 den cox Car dan istifade ederek masinlar yaradin---?

// Sual olduqda pls qrupa yazin , ugurlar :)
