
interface Icon{
    imgsrc:string;
    para:string;
}

export const IconPara = (props:Icon) =>{
    return(<><div className="icon-para">
        <img src={props.imgsrc} width="50px"/>
        <p>{props.para}</p>
        </div></>)
}