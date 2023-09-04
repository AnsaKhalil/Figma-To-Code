
interface Course{
    imgsrc:string;
    heading:string;
    para:string;
}

export const CourseCard = (props:Course) => {
    return(<div className="teaching-card">
    <img src={props.imgsrc} width="85"/>
<h3>{props.heading}</h3>
<p>{props.para}</p>
</div>)
}