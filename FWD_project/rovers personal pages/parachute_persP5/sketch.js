class Ring {

    constructor() {
        this.flag = false;
    }



    sector(x1, y1, x2, y2, x3, y3, x4, y4, memory){

        let hit = this.polyPoint(x1, y1, x2, y2, x3, y3, x4, y4);

        if(hit) {this.flag = !this.flag;}

        if (this.flag){fill(216,113,52);}
        else{fill(245,242,242);}

        this.flag = !(memory === 0 || isNaN(memory));

        beginShape();
        vertex(x1,y1);
        vertex(x2,y2);
        vertex(x3,y3);
        vertex(x4,y4);
        endShape(CLOSE);


    }

    polyPoint(x1, y1, x2, y2, x3, y3, x4, y4){

        let collision = false;

        let points = [];
        points[0] = createVector(x1,y1);
        points[1] = createVector(x2,y2);
        points[2] = createVector(x3,y3);
        points[3] = createVector(x4,y4);

        let next = 0;

        for(let current = 0; current < 4; current++){
            next = current + 1;
            if (next === 4) next = 0;

            let vc = points[current];
            let vn = points[next];

            if (((vc.y >= mouseY && vn.y < mouseY) || (vc.y < mouseY && vn.y >= mouseY)) &&
                (mouseX < (vn.x-vc.x)*(mouseY-vc.y) / (vn.y-vc.y)+vc.x)) {
                collision = !collision;
            }
        }

        return collision;

    }
}

let fragment1 = []; let memory1 = [];
let fragment2 = []; let memory2 = [];
let fragment3 = []; let memory3 = [];
let fragment4 = []; let memory4 = [];



function setup() {
    createCanvas(innerWidth, innerHeight*0.95);
    smooth();
    background(100,100,100);

    let xCoordinate = innerWidth*0.5;
    let yCoordinate = innerHeight**0.95+innerHeight;


    input1 = createInput("Dare");
    input1.position(xCoordinate, yCoordinate);

    input2 = createInput("Mighty");
    input2.position(input1.x+input1.width, yCoordinate);

    input3 = createInput("Things");
    input3.position(input2.x+input1.width, yCoordinate);

    input4 = createInput("34 N 118 W");
    input4.position(input3.x+input1.width, yCoordinate);

    fill(255,255,255);
    textSize(32);
    text("Here will be instruction and description", xCoordinate, yCoordinate*2);


    for(let i=0; i<100; i++){
        fragment1[i] = new Ring(); memory1.push(0);
        fragment2[i] = new Ring(); memory2.push(0);
        fragment3[i] = new Ring(); memory3.push(0);
        fragment4[i] = new Ring(); memory4.push(0);
    }


}

function greet() {
    const msg1 = binText(input1.value());
    const msg2 = binText(input2.value());
    const msg3 = binText(input3.value());
    const msg4 = binText(input4.value());



    for(let i = 0; i < 100; i++){

        memory1[i] = parseInt(msg1.charAt(i));
        memory2[i] = parseInt(msg2.charAt(i));
        memory3[i] = parseInt(msg3.charAt(i));
        memory4[i] = parseInt(msg4.charAt(i));


}}



function draw() {

    greet()


    let ringLength = Math.min(innerWidth, innerHeight*0.95)/10;
    let x_pos = ringLength*5;
    let y_pos = innerHeight*0.95/2;

    let num = 0;


    for (let a = 0; a<2*Math.PI; a += 2*Math.PI/100){

        let firstX2 = x_pos + Math.cos(a) * ringLength;
        let firstY2 = y_pos + Math.sin(a) * ringLength;

        let firstX3 = x_pos + Math.cos(a+2*Math.PI/100)*ringLength;
        let firstY3 = y_pos + Math.sin(a+2*Math.PI/100)*ringLength;

        let firstX1 = x_pos + Math.cos(a)*ringLength/2;
        let firstY1 = y_pos + Math.sin(a)*ringLength/2;

        let firstX4 = x_pos + Math.cos(a+2*Math.PI/100)*ringLength/2;
        let firstY4 = y_pos + Math.sin(a+2*Math.PI/100)*ringLength/2;


        fragment1[num]?.sector(firstX1,firstY1,firstX2,firstY2,firstX3,firstY3,firstX4,firstY4,memory1[num]);



        let secondX2 = x_pos + Math.cos(a) * ringLength*2;
        let secondY2 = y_pos + Math.sin(a) * ringLength*2;

        let secondX3 = x_pos + Math.cos(a+2*Math.PI/100)*ringLength*2;
        let secondY3 = y_pos + Math.sin(a+2*Math.PI/100)*ringLength*2;

        let secondX1 = x_pos + Math.cos(a)*ringLength;
        let secondY1 = y_pos + Math.sin(a)*ringLength;

        let secondX4 = x_pos + Math.cos(a+2*Math.PI/100)*ringLength;
        let secondY4 = y_pos + Math.sin(a+2*Math.PI/100)*ringLength;

        fragment2[num]?.sector(secondX1,secondY1,secondX2,secondY2,secondX3,secondY3,secondX4,secondY4,memory2[num]);


        let thirdX2 = x_pos + Math.cos(a) * ringLength*4;
        let thirdY2 = y_pos + Math.sin(a) * ringLength*4;

        let thirdX3 = x_pos + Math.cos(a+2*Math.PI/100)*ringLength*4;
        let thirdY3 = y_pos + Math.sin(a+2*Math.PI/100)*ringLength*4;

        let thirdX1 = x_pos + Math.cos(a)*ringLength*2;
        let thirdY1 = y_pos + Math.sin(a)*ringLength*2;

        let thirdX4 = x_pos + Math.cos(a+2*Math.PI/100)*ringLength*2;
        let thirdY4 = y_pos + Math.sin(a+2*Math.PI/100)*ringLength*2;

        fragment3[num]?.sector(thirdX1,thirdY1,thirdX2,thirdY2,thirdX3,thirdY3,thirdX4,thirdY4,memory3[num]);

        let fourthX2 = x_pos + Math.cos(a) * ringLength*5;
        let fourthY2 = y_pos + Math.sin(a) * ringLength*5;

        let fourthX3 = x_pos + Math.cos(a+2*Math.PI/100)*ringLength*5;
        let fourthY3 = y_pos + Math.sin(a+2*Math.PI/100)*ringLength*5;

        let fourthX1 = x_pos + Math.cos(a)*ringLength*4.5;
        let fourthY1 = y_pos + Math.sin(a)*ringLength*4.5;

        let fourthX4 = x_pos + Math.cos(a+2*Math.PI/100)*ringLength*4.5;
        let fourthY4 = y_pos + Math.sin(a+2*Math.PI/100)*ringLength*4.5;

        fragment4[num]?.sector(fourthX1,fourthY1,fourthX2,fourthY2,fourthX3,fourthY3,fourthX4,fourthY4,memory4[num]);

        num++;

    }



}

