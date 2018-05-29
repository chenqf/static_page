


function Test(a,b,c){
    this.a = a;
    this.b = b;
    this.c = c;
}

Test.prototype.name = 'test bind';

Test.prototype.log = function () {
    console.log(this.constructor === Test); // true
    console.log(this.name); // test bind
    console.log(this.a,this.b,this.c); // 1 2 3
}

const Demo = Test.bind(null,1,2);

let ins = new Demo(3);
ins.log();
console.log(Demo.length); // 1