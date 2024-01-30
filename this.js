const student = {
    name : "Kamal",
    age : 22,
    maths : 100 ,
    physics : 100,
    chemistry : 100 ,
    getAvg(){
        console.log(this);
        let avg = (this.maths + this.physics+this.chemistry)/3;
        console.log(`${this.name} got average of ${avg}`) ;
    }
}
