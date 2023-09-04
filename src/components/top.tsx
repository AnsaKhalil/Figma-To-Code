import {useEffect, useState} from "react";

export const Top = () => {

    const [topBtn, setTopBtn] = useState(false);

    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            if(window.scrollY > 300) {
                setTopBtn(true)
            } else {
                setTopBtn(false)
            }
        })
    }, []);

    const scrollUp = () => {
        window.scrollTo({top:0, left:0, behavior: "smooth"})
    }

    return (<div className="top-place">
        {topBtn && (
        <button className="top-circle" onClick={scrollUp}>
        <svg xmlns="http://www.w3.org/2000/svg" width="66" height="68" viewBox="0 0 66 68" fill="none">
  <path d="M33 2.125L16.5 19.125H26.8125V35.0625H39.1875V19.125H49.5L33 2.125ZM33 65.875C29.5886 65.875 26.8125 62.849 26.8125 59.1302V49.2416C26.8125 45.526 29.5886 42.5 33 42.5C36.4114 42.5 39.1875 45.526 39.1875 49.2426V59.1313C39.1875 62.849 36.4114 65.875 33 65.875ZM33 46.0944C31.2943 46.0944 29.9062 47.5076 29.9062 49.2426V59.1313C29.9062 60.8664 31.2943 62.2816 33 62.2816C34.7057 62.2816 36.0938 60.8664 36.0938 59.1313V49.2426C36.0938 47.5076 34.7057 46.0944 33 46.0944ZM22.6875 42.5H10.3125V45.6875H14.9531V65.875H18.0469V45.6875H22.6875V42.5ZM49.5 42.5H43.3125V65.875H46.4062V55.9842H49.5C52.9114 55.9842 55.6875 52.9582 55.6875 49.2394C55.6875 45.5239 52.9114 42.5 49.5 42.5ZM49.5 52.3908H46.4062V46.0944H49.5C51.2057 46.0944 52.5938 47.5054 52.5938 49.2405C52.5938 50.9756 51.2057 52.3908 49.5 52.3908Z" fill="#004AAD"/>
</svg></button>)}
</div>)
}