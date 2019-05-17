let Apple = function () {
    this.weight = 10;
    this.status = true;
    this.decrease = function () {
        if (this.weight > 0) {
            this.weight--;
        } else {
            alert("not");
        }
    };
    this.isEmpty = function () {
        if (this.weight > 0) {
            this.status = true;
        } else {
            this.status = false;
        }
    };
    this.getWeight = function () {
        return this.weight;
    };
    this.displayWeight = function () {
        document.getElementById("weight").innerHTML = this.weight;
    }
};
let Human = function (name, gender, weight) {
    this.name = name;
    this.gender = gender;
    this.gioiTinh="";
    this.weight = weight;
    this.isMale = function () {
        if (this.gender) {
            this.gioiTinh="Male";
        } else {
            this.gioiTinh="Female";
        }
    };
    this.connect = function (apple) {
        this.apple = apple;
    };
    this.checkApple = function (apple) {
        if (apple.weight > 0) {
            alert("apples: " + apple.weight);
        } else {
            alert("not apple");
        }
    };
    this.eatApple = function () {
        this.apple.decrease();
        this.weight++;
    };
    this.say = function () {
        alert("hello, I'm "+this.name+", "+this.weight+"kg");
    };
    this.getName = function () {
        return this.name;
    };
    this.setName = function (name) {
        this.name = name;
    };
    this.getWeight = function () {
        return this.weight;
    };
    this.setWeight = function () {
        this.weight = weight;
    };
    this.displayWeight = function () {
        document.getElementById("weight" + this.name).innerHTML = this.weight;
    };
    this.displayGioiTinh=function () {
        this.isMale();
        document.getElementById("gender"+this.name).innerHTML=this.gioiTinh;
    }
};
let apple = new Apple();
let Adam = new Human("Adam", true, 70);
let Eva = new Human("Eva", false, 50);
// document.getElementById("weightApple").innerHTML=apple.weight; //hien so luong tao
apple.displayWeight();
Adam.displayWeight();
Eva.displayWeight();
Adam.displayGioiTinh();
Eva.displayGioiTinh();

function eatAdam() {
    Adam.connect(apple);
    Adam.eatApple("apple");
    apple.displayWeight();
    Adam.displayWeight();
}
function eatEva() {
    Eva.connect(apple);
    Eva.eatApple("apple");
    apple.displayWeight();
    Eva.displayWeight();
}

function sayAdam() {
    Adam.say();
}

function sayEva() {
    Eva.say();
}