class Animal{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    eat(){
        return `${this.name} Eat Food`;
    }
    sleep()
    {
        return `${this.name} Dog sleep atleast 5 hours in day so thats why he leave ${this.age} year`
    }
}

class Dog extends Animal{
    constructor(name,age,speed){
        super(name,age)
        this.speed=speed;
    }
sound(speed){
    return `${this.name} Dog Sound Is Bho Bho And Speed Is ${speed}km/ph`
}
eat(){
    return `Modified Properties: ${this.name} eat food`
}
}

const dog=new Dog("American",12)
console.log(dog.eat())
console.log(dog.sleep())
console.log(dog.sound(24))