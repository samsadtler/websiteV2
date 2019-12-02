import React from 'react'
import foot from "../images/tw-moon-foot.jpg"
import test from "../images/tw-moon-test.jpg"
import circuit from "../images/tw-circuit.jpg"


const Cyborg = () => (
    <div className="row">
        <div className="embed-responsive embed-responsive-16by9">
            <iframe width="1920" height="777" src="https://www.youtube.com/embed/MdDfAdSeRNQ" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
        </div>
        <p>
            This wearable work explores ways to make technology enhance our senses. I and
            <a href="http://oryano.com/"> Oryan Inbar </a> worked with
            <a href="http://cyborgarts.com/#moon-ribas"> Moon Ribas </a> and
            <a href="http://harbisson.com"> Neil Harbisson </a>
            to develop new senses for their cyborg selves at the
            <a href="https://thoughtworksarts.io/"> Thought Works Arts Residency. </a> Through the Residency we worked closely with Moon to develop a "Seismic Sense", a wearable which could enable her to expereince earthquakes in real time. We also developed a "Sense of Time" for Neil which used heat to convey the time of day.
        </p>
        <img className="col-md-6" src={test} atl="Siesmic Fit Test" />   <img className="col-md-6" src={circuit} />
        <p>
            Our initial plan was to place the electronics on top of Moon's food. However, though this simple layout test we were able to determine that the top of her foot was not the right place. Specifically, because during her preformances she tended to use the tops of her feet. Thus this lead us to the conclusion that her ankle was the best place to locate her wearable sense.
        </p>
        <img src={foot} />
        <p>
            above is the final prototype of Moon's Siesmic Sense which utilized the US Geological Servey's API to get realtime information about earthquakes happening around the world over a cellular enabled micro controller.
        </p>

    </div>
)
export default Cyborg
