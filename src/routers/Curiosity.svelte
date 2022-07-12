
<div>
    <div class="my-class">
        <h3>Curiosity</h3></div>
    <div class="text"><ul id="result"></ul></div>
<!--    <script src="API.js"></script>-->
    <script>
        var result = document.getElementById('result');
        const getRandomLinks = () => {
            result.innerHTML = "";
            fetch('https://en.wikipedia.org/w/api.php?format=json&action=query&generator=prefixsearch&prop=extracts&exlimit=10&exintro&explaintext&gpslimit=10&gpssearch=' + "Curiosity_(rover)" + '&origin=*', {
                method: 'GET'}).then(response => response.json()).then(data => {

                Object.keys(data.query.pages).map(function(key) {
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

    <div class="image"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Curiosity_Self-Portrait_at_%27Big_Sky%27_Drilling_Site.jpg/800px-Curiosity_Self-Portrait_at_%27Big_Sky%27_Drilling_Site.jpg" tab="photo" style="position: absolute; left: 750px;right:100px; top: 155px;" width=700 height=500 alt="Curiosity rover"></div>

    <br><br><br>


    <div class="my-class" style="position: center">
        <div>
            <header>
                <h1> Explore with Curiosity</h1>
            </header>

            <div>
                <p>Explore some of the sites the Mars Curiosity rover has studied up close. Learn about each spot and view images taken by the rover. </p>
            </div>

            <footer>
                <a class="btn" href="https://mars.nasa.gov/msl/surface-experience?drive=2176&site=82">INTERACTIVE EXPERIENCE</a>
            </footer>

        </div>
    </div>

</div>

<style>
    .btn {
        display: inline-block; /* Строчно-блочный элемент */
        background: #8C959D; /* Серый цвет фона */
        color: #fff; /* Белый цвет текста */
        padding: 1rem 1.5rem; /* Поля вокруг текста */
        text-decoration: none; /* Убираем подчёркивание */
        border-radius: 3px; /* Скругляем уголки */
    }
</style>