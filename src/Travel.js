import React from "react"
import { IoLocationSharp } from "react-icons/io5";

export default function Travel(props) {
    return (
        <div className="card">
            <img className="image" src={props.imageUrl} alt=""/>
            <div className="box">
                <div className="location">
                    <span className="location-icon-text">
                        <span className="location-icon"><IoLocationSharp /></span>
                        <span className="location-text">{props.location}</span>
                    </span>
                    <span className="location-link"><a href={props.googleMapsUrl}>View on Google Maps</a></span>
                </div>

                <h2 className="place">{props.title}</h2>
                <h5 className="date">{props.startDate} - {props.endDate}</h5>
                <p className="description">{props.description}</p>
            </div>

        </div>
    )
}