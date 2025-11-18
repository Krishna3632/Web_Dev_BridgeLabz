class Product {
  constructor(id, name, price, category) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
  }

  applyDiscount(percent) {
    this.price = this.price - (this.price * percent / 100);
  }

  getDetails() {
    return `${this.id} | ${this.name} | Rs.${this.price} | ${this.category}`;
  }
}

const products = [
  new Product(1, "Laptop", 50000, "Electronics"),
  new Product(2, "Shoes", 800, "Fashion"),
  new Product(3, "Phone", 15000, "Electronics")
];

products.forEach(p => console.log(p.getDetails()));

const expensive = products.filter(p => p.price > 1000);
console.log("Price > 1000:", expensive);
