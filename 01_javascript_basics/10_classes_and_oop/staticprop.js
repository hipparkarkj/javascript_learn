class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);

    }

    static creatId(){
        return '123'
    }

}

const kailas = new User("kailas")

//console.log(kailas.creatId())

class Teacher extends User {
    constructor (username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@PaymentMethodChangeEvent.com")

//console.log(iphone.creatId());
console.log(kailas)
console.log(iphone)