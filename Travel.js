import React from "react"
import { IoLocationSharp } from "react-icons/io5";

export default function Travel(props) {
    return (
        <div className="container">
            <img className="image" src={`${props.imageUrl}`} />
            <div className="box">

                <div className="site">
                    <span><IoLocationSharp />{props.location}</span>
                    <a href={props.googleMapsUrl}>  View on Google Maps</a>
                </div>
                <h2 className="location">{props.title}</h2>
                <h5 className="date">{props.startDate} - {props.endDate}</h5>
                <p className="paragraph">{props.description}</p>

            </div>

        </div>
    )
}