<div>
    <div class="my-class">
        <h3>Zhurong</h3>
    </div>
    <div class="text">
        <ul id="result"></ul>
    </div>
    <script>
        var result = document.getElementById('result');
        const getRandomLinks = () => {
            result.innerHTML = "";
            fetch('https://en.wikipedia.org/w/api.php?format=json&action=query&generator=prefixsearch&prop=extracts&exlimit=10&exintro&explaintext&gpslimit=10&gpssearch=' + "Zhurong_(rover)" + '&origin=*', {
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
    <div class="image">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/%E4%B8%AD%E5%9B%BD%E7%81%AB%E6%98%9F%E6%8E%A2%E6%B5%8B%E5%99%A8%EF%BC%881%EF%BC%9A3%EF%BC%89.jpg/1280px-%E4%B8%AD%E5%9B%BD%E7%81%AB%E6%98%9F%E6%8E%A2%E6%B5%8B%E5%99%A8%EF%BC%881%EF%BC%9A3%EF%BC%89.jpg"
             tab="photo" style="position: absolute; left: 750px;right:100px; top: 155px;" width=700 height=535
             alt="Curiosity rover"><br><br><br>
    </div>
    <br><br>
    <div class="video">
        <p>Video about Zhurong</p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/1NfBSb7e4iA?start=113"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
    </div>
</div>