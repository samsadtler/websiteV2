import React from 'react'
import wires from "../images/crete-wire.jpg"
import process1 from "../images/crete-process.jpg"
import process2 from "../images/crete-process-2.jpg"
import process3 from "../images/crete-process-3.jpg"
import process4 from "../images/crete-process-4.jpg"

const Crete = () => (
    <div>
    <div className="row">
        <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/hJkIgraE530" frameborder="0" allowfullscreen></iframe>
        </div>
    </div>

    <div className="row p-break">
            <img src={wires} alt="Crete"/>
            <p className="col-md-6 p-break">Who knew organic material could be so useful? The first connected brick for the age of electronic homes and useless devices. It does everything you might want from a Fitbit and yet it is in a form factor that is unwieldy and impractical. It uses haptics to communicate to users when they are not mindful. Created in collaboration with <a href="oryano.com">Oryan Inbar</a>
            <br/>
            <br/>
            Part of the	<a href="/apocalypse"> Zombie Self Awareness Kit</a>. 
            </p>
    </div>
    <div className="row p-break">	
        <div className="col-md-6">
                <img src={process1} className="img-responsive center-block" alt="Crete Process Img 1"/>
                <p className="caption">
                The completed circuit design to make sure that Crete worked as advertised. Features a <a href="https://punchthrough.com/bean">Light Blue Bean</a> with BLE, a 105mAh battery plus a voltage regulator and battery charger.
            </p>		
        </div>

        <div className="col-md-6">
                <img src={process2} className="img-responsive center-block" alt="Crete Process Img 2" />
                <p className="caption">
                approximates the amount of room the final circuit will take up in Crete.
            </p>		
        </div>
    </div>
    <div className="row p-break">
            <div className="col-md-6">
                <img src={process4} className="img-responsive center-block" alt="Crete Process Img 4"/>
                <p className="caption">
                    The initial attempt at making a concrete block which was relatively close to the form factor we wanted. The issue we ran into was that the block was to thin and we did not use enough mold release which resulted in the block breaking.
                </p>
            
            </div>
            <div className="col-md-6">
                <img src={process3} className=" 
                img-responsive center-block" alt="Crete Process Img 3"/>
            <p className="caption">
                A picture of the final product being created. The circuits have been encased in liquid tape to prevent moister from the curing process to effect the circuit.
            </p>		
        </div>
    </div>
    <div className="p-break"></div>
    <div>
        <iframe width="100%" height="480" src="https://www.youtube.com/embed/GyFxrQd7-zw?list=PLp1AzLEITCFxnF3zXRn5ZErynB5Vg5Ynr" frameborder="0" allowfullscreen></iframe>
    </div>
    </div>
)

export default Crete
