

import foto3 from '../images/zafere.png'
import start from '../images/start.png'

function Card(props){
    console.log(props.item)
    let badgeText
    if(props.opemSpots === 0){
        badgeText = "SOLD OUT"
    } else if (props.location === "online"){
        badgeText = "ONLINE"
    }
    return(

        <div className="card">
            {badgeText  && <div className="card--badge">{badgeText}</div>}
            <img src={ props.coverImg } alt={ foto3 } className='card--image'/>
            <div className="card--stats">
                <img src={ start} alt={start} className='card--start'/>
                <span>{props.stats.rating}</span>
                <span className='gray'>({props.stats.reviewCount}) .</span>
                <span className='gray'>USA</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price} </span>/ person</p>

        </div>

    )

}

export default Card