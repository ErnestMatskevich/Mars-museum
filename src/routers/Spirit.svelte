<div>
    <div class="my-class">
        <h3>Spirit</h3></div>
    <div class="text">
        <ul id="result"></ul>
    </div>
    <script>
        var result = document.getElementById('result');
        const getRandomLinks = () => {
            result.innerHTML = "";
            fetch('https://en.wikipedia.org/w/api.php?format=json&action=query&generator=prefixsearch&prop=extracts&exlimit=10&exintro&explaintext&gpslimit=10&gpssearch=' + "Spirit_(rover)" + '&origin=*', {
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
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/KSC-03PD-0786.jpg/1920px-KSC-03PD-0786.jpg"
            tab="photo" style="position: absolute; left: 750px;right:100px; top: 240px;" width=700 height=500
            alt="Curiosity rover"></div>

    <div>
        <iframe src='https://solarsystem.nasa.gov/gltf_embed/2370' width='100%' height='450px' frameborder='0' title=""></iframe>
    </div>
</div>