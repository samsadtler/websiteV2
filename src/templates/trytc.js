import React from 'react'
import full from "../images/trytc-full.jpg"
import { Link } from 'gatsby'

const Trytc = () => (
    <div className="row">
        <img className="col-md-6" src={full} />
        <p className="col-md-6">
            The Demo website for <Link to="www.try.tc/demo"> Touchcode </Link>. Designed as a boilerplate for the marketing and sales teams it is a simple showcase of the Touchcode web SDK. It is build with Gulp and Babel
        </p>
        <div className="row">
            <div className="col-md-12">
                <div className="top_txt text-center">
                    <h2 style={{ color: '#009ade' }}>How It Works</h2>
                    <p>Touchcode's connected packaging solution allows you to turn your product's packaging into a portal that unlocks exclusive digital experiences for your customers. Using a mobile device or tablet, your consumer gains access to your content in 3 simple steps:</p>
                </div>
            </div>
            <div className="col-md-4">
                <div className="how_itworkblock">
                    <div className="htw_img">
                        <img src="https://touchcode.com/wp-content/uploads/2019/10/Step1-8.png" alt="Step1-8" />
                    </div>

                    <h3 style={{ color: '#009ade' }}>Step 1</h3>

                    <p>Using conductive ink, an invisible "code" is printed on your product's packaging, label or insert.</p>

                </div>
            </div>
            <div className="col-md-4">
                <div className="how_itworkblock">
                    <div className="htw_img">
                        <img src="https://touchcode.com/wp-content/uploads/2019/10/Step2-8.png" alt="Step2-8" />
                    </div>

                    <h3 style={{ color: '#009ade' }}>Step 2</h3>

                    <p>The customer simply goes to your website or app and touches your product or label to their mobile device.</p>

                </div>
            </div>
            <div className="col-md-4">
                <div className="how_itworkblock">
                    <div className="htw_img">
                        <img src="https://touchcode.com/wp-content/uploads/2019/10/Step3-8.png" alt="Step3-8" />
                    </div>
                    <h3 style={{ color: '#009ade' }}>Step 3</h3>

                    <p>Your digital content is unlocked <br /> for the customer to enjoy.</p>

                </div>
            </div>

        </div>
    </div>
)
export default Trytc
