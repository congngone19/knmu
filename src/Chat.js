import { useLocation } from 'react-router-dom';
import styles from './style/styles_chat.module.css'
import { useEffect, useRef, useState } from 'react';
import lottie from "lottie-web";
import BeKim from "./BeKim.json";
import BeLam from "./BeLam.json";
import BeSon from "./BeSon.json";
import BeThanh from "./BeThanh.json";

function Chat() {
    var { state } = useLocation();
    var [chatInput, setChatInput] = useState("");
    var [generateChat, SetGenerateChat] = useState("Hello");
    var onChangeInput = function (e) {
        setChatInput(e.target.value);
    }
    var generateAI = async function () {
        if (chatInput.trim() != "") {
            var data = [
                {
                    "sessionId": state.user.name,
                    "action": "sendMessage",
                    "chatInput": chatInput
                }
            ];
            try {
                var result = await fetch("https://inneduu.app.n8n.cloud/webhook/2d076a54-9ede-4d84-acf5-4db3253611cb", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "innedu": "innedu"
                    },
                    body: JSON.stringify(data),
                }).then(response => {
                    return response.text();
                })
                    .then(data => {
                        return data;
                    })
                    .catch(error => console.error("Error fetching data:", error));
                SetGenerateChat(result);
            } catch (error) {
                console.error("Error:", error);
            }
        }
    }
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
            alert("OKe")
        }
        return (<div ref={container} style={{ width: "100%" }} />);
    }
    return (
        <div className={styles.cus_body}>
            <main>
                <br /><br />
                <section className={styles.top_bar}>
                    <div className={styles.character_info}>
                        <img src="background.jpg" alt="Nhân vật" />
                        <span className={styles.character_name}>{state.user.name} - {state.user.character}</span>
                    </div>
                    <h1 className={styles.page_title}>TRANG GIỮ CHUỖI</h1>
                    <div className={styles.menu}>
                        <img className={styles.chain_count} src="Logo-KhoiNguonMerUoc.png" alt="Khởi nguồn mơ ước" style={{ width: "25%", marginLeft: "70%" }} />
                    </div>
                </section>
                <br /><br />
                <section className={styles.bot}>
                    <div className="row">
                        <div className="col-sm-3">
                            <Character name={state.user.character} />
                        </div>
                        <div className="col-sm-9">
                            <pre className={styles.ChatContent}>
                                {generateChat}
                            </pre>
                        </div>
                    </div>
                </section>
                <br /><br />
            </main>

            <footer>
                <div className='row'>
                    <div className="col-sm-9">
                        <input type="text" name="name" className={styles.question} id="nme" required autocomplete="off" value={chatInput} onChange={onChangeInput} />
                        <label for="nme"><span>What's your name?</span></label>
                    </div>
                    <div className="col-sm-3">
                        <div className={styles.buttons}>
                            <button className={`${styles.btn} ${styles.pink}`} onClick={generateAI}>Hỏi đáp</button>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
export default Chat;