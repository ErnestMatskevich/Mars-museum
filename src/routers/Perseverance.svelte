<div>
    <div class="my-class">
        <h3>Perseverance</h3>
        <div class="text">
            <ul id="result"></ul>
        </div>
        <script>
            var result = document.getElementById('result');
            const getRandomLinks = () => {
                result.innerHTML = "";
                fetch('https://en.wikipedia.org/w/api.php?format=json&action=query&generator=prefixsearch&prop=extracts&exlimit=10&exintro&explaintext&gpslimit=10&gpssearch=' + "Perseverance_(rover)" + '&origin=*', {
                    method: 'GET'
                }).then(response => response.json()).then(data => {

                    Object.keys(data.query.pages).map(function (key) {
                        const {
                            title,
                            extract
                        } = data.query.pages[key];

                        const li = document.createElement('li');
                        const text = li.textContent;
                        li.textContent = '';
                        const a = document.createElement('a');

                        a.setAttribute('target', '_blank');

                        a.innerHTML = `${extract}`;
                        li.appendChild(a);

                        result.appendChild(li);
                    });
                })
            }
            getRandomLinks();
        </script>
        <div class="image"><img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Perseverance-Selfie-at-Rochette-Horizontal-V2.gif"
                style="position: absolute; left: 700px;right:100px; top: 155px;" width=760 height=500
                alt="Curiosity rover"></div>
        <br><br>
    </div>

    <div>

    </div>

    <p class="text">NASA systems engineer at the Rocket Propulsion Laboratory in Pasadena, Ian Clark, left a binary code
        in the pattern of the parachute on which the craft descended. He encoded in the drawing a quote from Theodore
        Roosevelt, the 26th President of the United States, which became the motto of the space agency: "Dare mighty
        things." The coordinates on the outer ring point to the NASA laboratory. Here you can encode your message
        yourself and see what it would look like to land on Mars with your message.</p>


    <div>
        <input type="text" id="1" value="Dare">
        <input type="text" id="2" value="Mighty">
        <input type="text" id="3" value="Things">
        <input type="text" id="4" value="34 N 118 W">

        <script>

            function getMessage() {

                let msgFirst = document.getElementById("1").value
                let msgSecond = document.getElementById("2").value
                let msgThird = document.getElementById("3").value
                let msgFourth = document.getElementById("4").value

                return [msgFirst, msgSecond, msgThird, msgFourth]

            }

            function binText(word) {
                const text = word.toUpperCase()
                const abc = "_ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 *(),."
                let place
                let binCode = ""

                for (let i = 0; i < text.length; i++) {
                    place = abc.indexOf(text.charAt(i))
                    binCode = binCode + place.toString(2)
                }

                return binCode;
            }

            function fillMemory(memory1, memory2, memory3, memory4) {

                let message = getMessage()

                let code1ring = binText(message[0])
                let code2ring = binText(message[1])
                let code3ring = binText(message[2])
                let code4ring = binText(message[3])


                for (let i = 0; i < 100; i++) {

                    memory1[i] = (code1ring.charAt(i)).toString()
                    memory2[i] = parseInt(code2ring.charAt(i))
                    memory3[i] = parseInt(code3ring.charAt(i))
                    memory4[i] = parseInt(code4ring.charAt(i))

                    console.log((memory1))

                }

            }

            class Ring {

                constructor() {
                    this.flag = false;
                }


                sector(x1, y1, x2, y2, x3, y3, x4, y4, memory) {

                    let hit = this.polyPoint(x1, y1, x2, y2, x3, y3, x4, y4);

                    if (hit) {
                        this.flag = !this.flag;
                    }

                    if (this.flag) {
                        p5.fill(216, 113, 52);
                    } else {
                        p5.fill(245, 242, 242);
                    }

                    this.flag = !(memory === 0 || isNaN(memory));

                    beginShape();
                    vertex(x1, y1);
                    vertex(x2, y2);
                    vertex(x3, y3);
                    vertex(x4, y4);
                    endShape(CLOSE);


                }

                polyPoint(x1, y1, x2, y2, x3, y3, x4, y4) {

                    let collision = false;

                    let points = [];
                    points[0] = createVector(x1, y1);
                    points[1] = createVector(x2, y2);
                    points[2] = createVector(x3, y3);
                    points[3] = createVector(x4, y4);

                    let next = 0;

                    for (let current = 0; current < 4; current++) {
                        next = current + 1;
                        if (next === 4) next = 0;

                        let vc = points[current];
                        let vn = points[next];

                        if (((vc.y >= mouseY && vn.y < mouseY) || (vc.y < mouseY && vn.y >= mouseY)) &&
                            (mouseX < (vn.x - vc.x) * (mouseY - vc.y) / (vn.y - vc.y) + vc.x)) {
                            collision = !collision;
                        }
                    }

                    return collision;

                }
            }

            let fragment1 = [];
            let memory1 = [];
            let fragment2 = [];
            let memory2 = [];
            let fragment3 = [];
            let memory3 = [];
            let fragment4 = [];
            let memory4 = [];

            let stars = [];
            let speed = 25;

            function setup() {
                createCanvas(innerWidth, innerHeight);
                smooth();


                for (let j = 0; j < 1000; j++) {
                    stars[j] = new Star();
                }


                for (let i = 0; i < 100; i++) {
                    fragment1[i] = new Ring();
                    memory1.push(0);
                    fragment2[i] = new Ring();
                    memory2.push(0);
                    fragment3[i] = new Ring();
                    memory3.push(0);
                    fragment4[i] = new Ring();
                    memory4.push(0);
                }


            }

            function greet() {

                const messages = getMessage();

                const msg1 = binText(messages[0]);
                const msg2 = binText(messages[1]);
                const msg3 = binText(messages[2]);
                const msg4 = binText(messages[3]);


                for (let i = 0; i < 100; i++) {

                    memory1[i] = parseInt(msg1.charAt(i));
                    memory2[i] = parseInt(msg2.charAt(i));
                    memory3[i] = parseInt(msg3.charAt(i));
                    memory4[i] = parseInt(msg4.charAt(i));


                }
            }


            function draw() {

                background("black");
                translate(width / 2, height / 2);
                for (let i = 0; i < stars.length; i++) {
                    stars[i].update();
                    stars[i].show();

                }

                translate(-innerWidth / 2, -innerHeight / 2);


                greet()


                let ringLength = Math.min(innerWidth, innerHeight * 0.95) / 10;
                let x_pos = innerWidth * 0.95 / 2;
                let y_pos = innerHeight * 0.95 / 2;

                let num = 0;


                for (let a = 0; a < 2 * Math.PI; a += 2 * Math.PI / 100) {

                    let firstX2 = x_pos + Math.cos(a) * ringLength;
                    let firstY2 = y_pos + Math.sin(a) * ringLength;

                    let firstX3 = x_pos + Math.cos(a + 2 * Math.PI / 100) * ringLength;
                    let firstY3 = y_pos + Math.sin(a + 2 * Math.PI / 100) * ringLength;

                    let firstX1 = x_pos + Math.cos(a) * ringLength / 2;
                    let firstY1 = y_pos + Math.sin(a) * ringLength / 2;

                    let firstX4 = x_pos + Math.cos(a + 2 * Math.PI / 100) * ringLength / 2;
                    let firstY4 = y_pos + Math.sin(a + 2 * Math.PI / 100) * ringLength / 2;


                    fragment1[num]?.sector(firstX1, firstY1, firstX2, firstY2, firstX3, firstY3, firstX4, firstY4, memory1[num]);


                    let secondX2 = x_pos + Math.cos(a) * ringLength * 2;
                    let secondY2 = y_pos + Math.sin(a) * ringLength * 2;

                    let secondX3 = x_pos + Math.cos(a + 2 * Math.PI / 100) * ringLength * 2;
                    let secondY3 = y_pos + Math.sin(a + 2 * Math.PI / 100) * ringLength * 2;

                    let secondX1 = x_pos + Math.cos(a) * ringLength;
                    let secondY1 = y_pos + Math.sin(a) * ringLength;

                    let secondX4 = x_pos + Math.cos(a + 2 * Math.PI / 100) * ringLength;
                    let secondY4 = y_pos + Math.sin(a + 2 * Math.PI / 100) * ringLength;

                    fragment2[num]?.sector(secondX1, secondY1, secondX2, secondY2, secondX3, secondY3, secondX4, secondY4, memory2[num]);


                    let thirdX2 = x_pos + Math.cos(a) * ringLength * 4;
                    let thirdY2 = y_pos + Math.sin(a) * ringLength * 4;

                    let thirdX3 = x_pos + Math.cos(a + 2 * Math.PI / 100) * ringLength * 4;
                    let thirdY3 = y_pos + Math.sin(a + 2 * Math.PI / 100) * ringLength * 4;

                    let thirdX1 = x_pos + Math.cos(a) * ringLength * 2;
                    let thirdY1 = y_pos + Math.sin(a) * ringLength * 2;

                    let thirdX4 = x_pos + Math.cos(a + 2 * Math.PI / 100) * ringLength * 2;
                    let thirdY4 = y_pos + Math.sin(a + 2 * Math.PI / 100) * ringLength * 2;

                    fragment3[num]?.sector(thirdX1, thirdY1, thirdX2, thirdY2, thirdX3, thirdY3, thirdX4, thirdY4, memory3[num]);

                    let fourthX2 = x_pos + Math.cos(a) * ringLength * 5;
                    let fourthY2 = y_pos + Math.sin(a) * ringLength * 5;

                    let fourthX3 = x_pos + Math.cos(a + 2 * Math.PI / 100) * ringLength * 5;
                    let fourthY3 = y_pos + Math.sin(a + 2 * Math.PI / 100) * ringLength * 5;

                    let fourthX1 = x_pos + Math.cos(a) * ringLength * 4.5;
                    let fourthY1 = y_pos + Math.sin(a) * ringLength * 4.5;

                    let fourthX4 = x_pos + Math.cos(a + 2 * Math.PI / 100) * ringLength * 4.5;
                    let fourthY4 = y_pos + Math.sin(a + 2 * Math.PI / 100) * ringLength * 4.5;

                    fragment4[num]?.sector(fourthX1, fourthY1, fourthX2, fourthY2, fourthX3, fourthY3, fourthX4, fourthY4, memory4[num]);

                    num++;

                }


            }

            function Star() {
                this.x = random(-width, width);
                this.y = random(-height, height);
                this.z = random(width);

                this.update = function () {
                    this.z = this.z - speed;
                    if (this.z < 1) {
                        this.x = random(-width, width);
                        this.y = random(-height, height);
                        this.z = width;
                    }
                };

                this.show = function () {
                    fill("white");
                    var sx = map(this.x / this.z, 0, 1, 0, width);
                    var sy = map(this.y / this.z, 0, 1, 0, height);
                    var r = map(this.z, 0, width, 10, 0);
                    ellipse(sx, sy, r, r);
                };
            }

        </script>
    </div>
</div>