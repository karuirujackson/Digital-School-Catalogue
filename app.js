class School {
    constructor (name, level, numberOfStudents){
        this._name = name;
        this._level = 'primary';
        this._numberOfStudents = numberOfStudents;
    }
    get name(){
        return this._name;
    }
    get level(){
        return this._level;
    }
    get numberOfStudents(){
        return this._numberOfStudents;
    }
    set numberOfStudents(num){
        if(typeof num === 'number'){
            return this._numberOfStudents = num;
        }else{
            return 'Invalid input: numberOfStudents must be set to a Number.'
        }
    }
    quickFacts (){
        return `${this._name} educates ${this._numberOfStudents} students at the ${this._level} school ${this._level}`
    }
    static pickSubstituteTeacher (substituteTeachers){
        substituteTeachers = [];
        let randomTeacher = Math.floor(Math.random() * substituteTeachers.length);
        return randomTeacher;
    }
};

class Primary extends School{
    constructor (name, numberOfStudents, pickupPolicy){
        super(name);
        this._pickupPolicy = pickupPolicy;
    }
    get pickupPolicy(){
        this._pickupPolicy;
    }
};

class Middle extends School{
    constructor (name){
        super(name);
    }
};

class High extends School {
    constructor (){
        this._sportsTeams = []
    }
};


/*myArray = ['A', 'B', 'C', 'D'];
let randomArray = Math.floor(Math.random() * myArray.length);
console.log(randomArray);*/