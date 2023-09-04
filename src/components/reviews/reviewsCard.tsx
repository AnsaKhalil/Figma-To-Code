
interface Read {
    imgsrc: string;
    name: string;
    career: string;
    content: string
}

export const ReadCard = (props: Read) => {
    return (<><div className="reviews-card-container">
    <div className="reviews-img-heading">
        <img className="reviews-img" src={props.imgsrc}/>
        <div className="reviews-card-heading">
            <h3>{props.name}</h3>
            <p>{props.career}</p>
        </div></div>
        <div className="reviews-card-content">
        <p><span className="reviews-quote start">“</span>{props.content}<br></br>
        <span className="reviews-quote end">”</span></p>
                </div>
                
        <a><p className="reviews-readmore">read more</p></a>
    </div></>)
}