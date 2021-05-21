class Pet {
    constructor(name, fur) {
        this.name = name;
        this.furColor = fur;
        this.legsCount = 4;
        this.hasTale = true;
        this.voiceCount = 0;
        this.children = [];
        this.sound = 'miau au nom';
        
    }
    
    voice() {
        this.voiceCount += 1;
        console.log(`${this.name}: ${this.sound} (${this.voiceCount})`);
       /*console.log('Au au');
        console.log(this.name);*/
    }

    introduction(){
        console.log(`Hi, I am ${this.name}, my fur color ${this.furColor} and sound like ${this.sound}`)
    }

    childCount(){
        console.log(`${this.name} has ${this.children.length} children`);
    }
}

module.exports = Pet;    //node back.end panudojimas vietoj export 