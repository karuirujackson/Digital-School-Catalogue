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
        if(num.isNaN()){
            return 'Invalid input: numberOfStudents must be set to a Number.'
        }else{
            return this._numberOfStudents = num;
        }
    }
    quickFacts (){
        return `${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level`
    }
    static pickSubstituteTeacher (substituteTeachers){
        let randomTeacher = Math.floor(Math.random() * substituteTeachers.length);
        return substituteTeachers[randomTeacher];
    }
};

class PrimarySchool extends School{
    constructor (name, numberOfStudents, pickupPolicy){
        super(name, 'primary', numberOfStudents);
        this._pickupPolicy = pickupPolicy;
    }
    get pickupPolicy(){
        this._pickupPolicy;
    }
};

class MiddleSchool extends School{
    constructor (name, numberOfStudents){
        super(name, 'Middle', numberOfStudents);
    }
};

class HighSchool extends School {
    constructor (name, numberOfStudents, sportsTeams){
        super(name, 'High', numberOfStudents);
        this._sportsTeams = sportsTeams;
    }
    get sportsTeams(){
        this._sportsTeams;
    } 
};



//const testbugnumberOfStudents = new School('Jay', 'ABC');
//console.log(testbugnumberOfStudents);
const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514,'Students must be picked up by a parent, guardian, or a family member over the age of 13.')
console.log(lorraineHansbury);
//console.log(lorraineHansbury.quickFacts());

const selectTeacher = School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);
console.log(selectTeacher);

const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
console.log(alSmith.sportsTeams);





/*myArray = ['A', 'B', 'C', 'D'];
let randomArray = Math.floor(Math.random() * myArray.length);
console.log(myArray[randomArray]);*/