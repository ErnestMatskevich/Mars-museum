<div>
    <div class="my-class">
        <h3>Opportunity</h3></div>
    <div class="text"><ul id="result"></ul></div>
    <!--    <script src="API.js"></script>-->
    <script>
        var result = document.getElementById('result');
        const getRandomLinks = () => {
            result.innerHTML = "";
            fetch('https://en.wikipedia.org/w/api.php?format=json&action=query&generator=prefixsearch&prop=extracts&exlimit=10&exintro&explaintext&gpslimit=10&gpssearch=' + "Opportunity_(rover)" + '&origin=*', {
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

    <div class="image"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/NASA_Mars_Rover.jpg/1280px-NASA_Mars_Rover.jpg" tab="photo" style="position: absolute; left: 750px;right:100px; top: 200px;" width=700 height=500 alt="Curiosity rover"></div>

    <div class="text">
        <p>Opportunity's Last Message
            Taken on June 10, 2018 (the 5,111th Martian day, or sol, of the mission) this “noisy,” incomplete image was the last data NASA's Opportunity rover sent back from Mars.
            March 12, 2019

            Taken on June 10, 2018 (the 5,111th Martian day, or sol, of the mission) this “noisy,” incomplete image was the last data NASA's Opportunity rover sent back from Perseverance Valley on Mars. The partial, full-frame image from the Panoramic Camera (Pancam) was sent up to NASA's Mars Reconnaissance Orbiter around 9:45 a.m. PDT (12:45 p.m. EDT) to relay back to Earth as an intense dust storm darkened the skies around the solar-powered rover. The image was received on Earth at around 10:05 a.m. PDT (1:05 p.m. EDT).

            Opportunity took this image with the left eye of the Pancam, with its solar filter pointed at the Sun. But since the dust storm blotted out the Sun, the image is dark. The white speckles are noise from the camera. All Pancam images have noise in them, but the darkness makes it more apparent. The transmission stopped before the full image was transmitted, leaving the bottom of the image incomplete, represented here as black pixels.

            While this partial full-frame image was the last that Opportunity transmitted, it was not actually the last set of images from Opportunity. This image was taken at around 9:30 a.m. PDT (12:30 p.m. EDT) on June 10, 2018. Another set of images was taken about three minutes later. The thumbnail versions of the last images taken were transmitted, but the rover lost contact before transmitting the full-frame versions.</p>
        <iframe src='https://mars.nasa.gov/embed/22339/' width='140%' height='600' style="position: absolute; left: 600px; right:100px; top: 0px;" scrolling='no' frameborder='0' title=""></iframe>
    </div>
</div>