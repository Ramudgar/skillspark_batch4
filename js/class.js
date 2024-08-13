class Student {
  constructor(name, age, address, phone) {
    this.name = name;
    this.age = age;
    this.address = address;
    this.phone = phone;
  }

    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}, Address: ${this.address}, Phone: ${this.phone}`;
    }
}

let bikrant = new Student("Bikrant", 22, "Kathmandu", 9841234567);
console.log(bikrant.name);
console.log(bikrant.getDetails());
