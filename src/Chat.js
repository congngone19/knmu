import { useLocation } from 'react-router-dom';
import styles from './style/styles_chat.module.css'
import { useEffect, useRef, useState } from 'react';
import lottie from "lottie-web";
import BeKim from "./BeKim.json";
import BeLam from "./BeLam.json";
import BeSon from "./BeSon.json";
import BeThanh from "./BeThanh.json";
import beKim from "./style/characters/beKim.png";
import beLam from "./style/characters/beLam.png";
import beSon from "./style/characters/beSon.png";
import beThanh from "./style/characters/beThanh.png";
import Card from './Card';

function Chat() {
    var { state } = useLocation();
    var [chatInput, setChatInput] = useState("");
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
    var getCharacter = function () {
        if (state.user.character == "BeKim") {
            return {
                character: beKim,
                "name": "Bé họ Kim",
                "style": {
                    width: "40%"
                },
                "story": {
                    "diff":
                        `
Da rám nắng, tóc buộc cao, đôi mắt sáng rỡ mỗi khi nhìn thấy sách. Cô bé mê học, nhưng mẹ lại bảo con gái thì nên lo việc nhà hơn là cầm bút. Thế là thay vì ngồi ngay ngắn trên lớp, cô thường phải nghỉ học để nấu cơm, chăm em, ra đồng làm ruộng. Dù vậy, từng phút giây được học tập đều vô cùng quý giá. Gặp khó khăn về định kiến nhất. Bên cạnh đó còn gặp phải khó khăn về Kinh tế và rào cản ngôn ngữ. Gặp khó khăn về kinh tế nhất. Bên cạnh đó, còn gặp phải khó khăn về ngôn ngữ và định kiến
                        `,
                    "profile": `
Giới tính: Nữ 
Đặc điểm ngoại hình: Da rám nắng, tóc buộc cao, gọn gàng, má lúm đồng tiền.
Tính cách: Ngoan ngoãn, mạnh mẽ, tháo vát, "thấy sách là mắt sáng rỡ"
                    `
                }
            }
        } else if (state.user.character == "BeThanh") {
            return {
                character: beThanh,
                "name": "Bé họ Thạch",
                "style": {
                    width: "50%"
                },
                "story": {
                    "diff":
                        `
Bím tóc một bên, dáng người nhỏ con, hướng nội, có sở thích sưu tầm hoa phượng ở mỗi ngôi trường mình đi qua. Gia đình kinh tế khó khăn, ba mẹ thường xuyên đổi việc, đổi chỗ làm, cô bé phải chuyển trường liên tục, khiến em dần thu mình, ít chủ động trò chuyện với ai. Tuy đôi lúc thấy cô đơn, nhưng em vẫn luôn cố gắng theo đuổi việc học, vì mỗi ngôi trường là một hành trình mới.
                        `,
                    "profile": `
Giới tính: Nữ 
Đặc điểm ngoại hình: Bím tóc 1 bên
Tính cách: Nhẹ nhàng, tinh tế, hay mơ mộng. Nhìn ít nói nhưng khi thân thì nói siêu nhiều
                    `
                }
            }
        } else if (state.user.character == "BeLam") {
            return {
                character: beLam,
                "name": "Bé họ Lâm",
                "style": {
                    width: "50%"
                },
                "story": {
                    "diff":
                        `
Gầy gầy, hiếu động, lúc nào cũng có một vết mực trên mặt. Sinh ra trong gia đình làm nông nên em chỉ có một cây bút chì cùn để học, nhưng em lại rất thích học môn Mỹ thuật và cực kỳ sáng tạo. Dù thiếu thốn, em vẫn không ngừng học tập và tin rằng chỉ cần có đam mê, mọi khó khăn đều có thể vượt qua. Gặp khó khăn về kinh tế nhất. Bên cạnh đó, còn gặp phải khó khăn về định kiến và rào cản ngôn ngữ
                        `,
                    "profile": `
Giới tính: Nam 
Đặc điểm ngoại hình: Gầy gầy, hiếu động 
Tính cách: Ham học hỏi, thông minh, luôn nghĩ ra những cách "chữa cháy" cực kỳ sáng tạo
                    `
                }
            }
        } else {
            return {
                character: beSon,
                "name": "Bé họ Sơn",
                "style": {
                    width: "50%"
                },
                "story": {
                    "diff":
                        `
Nhỏ con, lanh lợi, môn nào học cũng giỏi nhưng cứ đến giờ chính tả là cuống cuồng. Từ nhỏ đã quen tiếp xúc với tiếng Khmer, nên khi vào cấp 1, cậu bé gặp không ít khó khăn với môn học này. Mỗi lần đọc bài trước lớp, em hồi hộp sợ viết sai, phát âm sai. Dù đôi lúc buồn vì bị trừ điểm, nhưng em vẫn kiên trì tìm cách chinh phục môn học này. Gặp khó khăn rào cản ngôn ngữ nhất. Bên cạnh đó, còn khó khăn về Kinh tế và gặp phải định kiến
                        `,
                    "profile": `
Giới tính: Nam  
Ngoại hình: Nhỏ con, tròn tròn, khuôn mặt lém lỉnh
Tính cách: Hay mắc cỡ nhưng rất lanh.
                    `
                }
            }
        }
    }
    var onSelectButton = function (action) {
        if (action == 1) {
            SetGenerateChat(getCharacter()["story"]["profile"]);
        } else if (action == 2) {
            SetGenerateChat(getCharacter()["story"]["diff"]);
        }else{
            console.log(myCard)
        }
    }
    var [generateChat, SetGenerateChat] = useState(() => getCharacter()["story"]["profile"]);
    var [myCard, setMyCard] = useState({
        "nhanuoc": "Sử dụng",
        "giaovien": "Sử dụng",
        "cohoi": "Sử dụng"
    })
    return (
        <div className={styles.cus_body}>
            <main>
                <br /><br />
                <section className={styles.top_bar}>
                    <div className={styles.character_info}>
                        <div className={styles.character_frame}>
                            {/* <img src="background.jpg" alt="Nhân vật" /> */}
                            <img src={getCharacter()["character"]} style={getCharacter()["style"]} />
                            <div className={styles.character_name}>{state.user.name} - {state.user.character}</div>
                        </div>
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
                        <div className="col-sm-7">
                            <pre className={styles.ChatContent}>
                                {generateChat}
                            </pre>
                        </div>
                        <div className="col-sm-2" >
                            <div className={styles.buttons} style={{ padding: "10px" }}>
                                <button className={`${styles.btn} ${styles.pink}`} onClick={() => onSelectButton(1)}>Profile</button>
                            </div>
                            <div className={styles.buttons} style={{ padding: "10px" }}>
                                <button className={`${styles.btn} ${styles.blue}`} onClick={() => onSelectButton(2)}>Khó Khăn</button>
                            </div>
                            <div className={styles.buttons} style={{ padding: "10px" }}>
                                <button className={`${styles.btn} ${styles.orange}`} onClick={() => onSelectButton(0)}>Dự đoán nghề nghiệp</button>
                            </div>
                        </div>
                    </div>
                </section>
                <br /><br />
            </main>

            <footer>
                <div className='row'>
                    {/* <div className="col-sm-9">
                        <input type="text" name="name" className={styles.question} id="nme" required autocomplete="off" value={chatInput} onChange={onChangeInput} />
                        <label for="nme"><span>What's your name?</span></label>
                    </div>
                    <div className="col-sm-3">
                        <div className={styles.buttons}>
                            <button className={`${styles.btn} ${styles.pink}`} onClick={generateAI}>Hỏi đáp</button>
                        </div>
                    </div> */}
                    <div className='col-sm-4'>
                        <Card card={{ title: "Thẻ Power - Nhà nước", type: "nhanuoc", status: "Sử dụng", myCard: myCard, setMyCard: setMyCard }} />
                    </div>
                    <div className='col-sm-4'>
                        <Card card={{ title: "Thẻ Power - Giáo viên", type: "giaovien", status: "Sử dụng", myCard: myCard, setMyCard: setMyCard }} />
                    </div>
                    <div className='col-sm-4'>
                        <Card card={{ title: "Thẻ cơ hội", type: "cohoi", status: "Sử dụng", myCard: myCard, setMyCard: setMyCard }} />
                    </div>
                </div>
            </footer>
        </div>
    );
}
export default Chat;