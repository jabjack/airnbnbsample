
import React from "react"

import foto2 from '../images/photo-grip1.PNG'

function Hero() {

    return(

        <section className="hero">
            <img src={ foto2} alt={foto2}  className="hero--photo"/>
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led  by
                one-of-a-kindhosts-all without leaving home.
            </p>
        </section>



    )

}

export default Hero