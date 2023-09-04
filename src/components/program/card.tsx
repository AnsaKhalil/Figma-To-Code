
interface Cards {
    imgsrc:string;
    heading: string;
    para: string;
}

export const Card = (card: Cards) => {
return (    
        <div className="programs-card">
            <img className="programs-img" src={card.imgsrc}/>
            <div className="programs-card-detail">
        <h1>{card.heading}</h1>
        <p>{card.para}</p>
        <button className="programs-btn">View Program</button>
        </div>
        </div>)
}