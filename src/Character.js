import lottie from "lottie-web";
import { useEffect, useRef } from "react";
import BeKim from "./BeKim.json";
import BeLam from "./BeLam.json";
import BeSon from "./BeSon.json";
import BeThanh from "./BeThanh.json";

function Character() {
    var container = useRef(null);
    useEffect(() => {
        lottie.loadAnimation({
            container: container.current,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: BeLam,
        });
    }, []);
    return <div ref={container} style={{ width: "25%", display: "flex", float: "left" }} />;
}

export default Character;