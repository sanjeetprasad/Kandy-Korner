import React from "react"
import "./Location.css"

export const Location = ({location}) => (
        <section className="location">
            <address className="location__address">Address: {location.address}</address>
            <p className="location__squareFootage">Square Footage: {location.squareFootage}</p>
            <p className="location__handicapAccessible">Handicap Accessible: {location.handicapAccessible}</p>
        </section>
    )
    