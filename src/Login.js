import lottie from "lottie-web";
import { useNavigate } from 'react-router-dom';
import myStyle from './style/index.module.css'
import { useState, useEffect, useRef, use } from 'react';
import BeKim from "./BeKim.json";
import BeLam from "./BeLam.json";
import BeSon from "./BeSon.json";
import BeThanh from "./BeThanh.json";

function Login() {
    var navigate = useNavigate();
    var [user, setUser] = useState(
        {
            name: "",
            character: ""
        }
    );
    var [isChoose, setIsChoose] = useState(false);
    var goToChat = function () {
        navigate("/chat", { state: { user } })
    }
    var onChangeName = function (event) {
        setUser((current) => {
            return { ...current, name: event.target.value };
        })
    }
    var handleClick = () => {
        setIsChoose(!isChoose);
    };
    function Character(props) {
        var container = useRef(null);
        var animationInstance = useRef(null);
        useEffect(() => {
            var characterName = props.name;
            if (characterName == "BeKim") {
                if (!animationInstance.current) { // Prevent multiple instances
                    animationInstance.current = lottie.loadAnimation({
                        container: container.current, // Target container
                        renderer: "svg",
                        loop: true,
                        autoplay: true,
                        animationData: BeKim,
                    });
                }
            }
            if (characterName == "BeLam") {
                if (!animationInstance.current) { // Prevent multiple instances
                    animationInstance.current = lottie.loadAnimation({
                        container: container.current, // Target container
                        renderer: "svg",
                        loop: true,
                        autoplay: true,
                        animationData: BeLam,
                    });
                }
            }
            if (characterName == "BeThanh") {
                if (!animationInstance.current) { // Prevent multiple instances
                    animationInstance.current = lottie.loadAnimation({
                        container: container.current, // Target container
                        renderer: "svg",
                        loop: true,
                        autoplay: true,
                        animationData: BeThanh,
                    });
                }
            }
            if (characterName == "BeSon") {
                if (!animationInstance.current) { // Prevent multiple instances
                    animationInstance.current = lottie.loadAnimation({
                        container: container.current, // Target container
                        renderer: "svg",
                        loop: true,
                        autoplay: true,
                        animationData: BeSon,
                    });
                }
            }

            return () => {
                if (animationInstance.current) {
                    animationInstance.current.destroy(); // Cleanup on unmount
                    animationInstance.current = null;
                }
            };
        }, []);
        var onClickCharacter = function () {
            setUser((current) => {
                return { ...current, character: props.name };
            });
        }
        return (<div ref={container} style={{ width: "25%", display: "flex", float: "left", cursor: "pointer", border: isChoose ? "solid 1px" : "none" }} onClick={onClickCharacter} />);
    }
    return (
        <div className={myStyle.body}>
            <div className={myStyle.cus_container}>
                <div className={myStyle.right} style={{ width: "100%", justifyContent: "start" }}>
                    <input type="text" className='form-control' style={{ width: "50%" }} id="txtUser" placeholder="Lựa chọn nhân vật của bạn" onChange={onChangeName} />
                    <br /> <br />
                    <div style={{ width: "100%" }}>
                        <Character name={"BeKim"} onClick={handleClick} />
                        <Character name={"BeLam"} />
                        <Character name={"BeThanh"} />
                        <Character name={"BeSon"} />
                    </div>
                    <div className={myStyle.buttons}>
                        <button className={`${myStyle.btn} ${myStyle.pink}`} onClick={goToChat}>Đăng nhập ngay</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;