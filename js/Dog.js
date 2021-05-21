class Dog {
    constructor(name, fur) {
        this.name = name;
        this.furColor = fur;
        this.legsCount = 4;
        this.hasTale = true;
        this.voiceCount = 0;
        
    }
    
    voice() {
        this.voiceCount += 1;
        console.log(`${this.name}: au au (${this.voiceCount})`);
       /*console.log('Au au');
        console.log(this.name);*/
    }
}

module.exports = Dog;    //node back.end panudojimas vietoj export 