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
    var generateAI = async function (message) {
        var data = message;
        try {
            var result = await fetch("http://n8n.og-19.online/webhook/2fc680da-91c5-4786-833d-a11e06e2f32b", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "ngonc": "ngonc"
                },
                body: JSON.stringify(data),
            }).then(response => {
                return response.text();
            })
                .then(data => {
                    return data;
                })
                .catch(error => console.error("Error fetching data:", error));
            SetGenerateChat(result.replaceAll("*", "").replaceAll("###","-"));
        } catch (error) {
            console.error("Error:", error);
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
Gặp khó khăn về định kiến nhất. Bên cạnh đó còn gặp phải khó khăn về Kinh tế và rào cản ngôn ngữ. Gặp khó khăn về kinh tế nhất. Bên cạnh đó, còn gặp phải khó khăn về ngôn ngữ và định kiến
                        `,
                    "profile": `
Da rám nắng, tóc buộc cao, đôi mắt sáng rỡ mỗi khi nhìn thấy sách. Cô bé mê học, nhưng mẹ lại bảo con gái thì nên lo việc nhà hơn là cầm bút. Thế là thay vì ngồi ngay ngắn trên lớp, cô thường phải nghỉ học để nấu cơm, chăm em, ra đồng làm ruộng. Dù vậy, từng phút giây được học tập đều vô cùng quý giá.
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
Gặp khó khăn về kinh tế nhất. Bên cạnh đó, còn gặp phải khó khăn về ngôn ngữ và định kiến
                        `,
                    "profile": `
Bím tóc một bên, dáng người nhỏ con, hướng nội, có sở thích sưu tầm hoa phượng ở mỗi ngôi trường mình đi qua. Gia đình kinh tế khó khăn, ba mẹ thường xuyên đổi việc, đổi chỗ làm, cô bé phải chuyển trường liên tục, khiến em dần thu mình, ít chủ động trò chuyện với ai. Tuy đôi lúc thấy cô đơn, nhưng em vẫn luôn cố gắng theo đuổi việc học, vì mỗi ngôi trường là một hành trình mới.
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
Gặp khó khăn về kinh tế nhất. Bên cạnh đó, còn gặp phải khó khăn về định kiến và rào cản ngôn ngữ
                        `,
                    "profile": `
Gầy gầy, hiếu động, lúc nào cũng có một vết mực trên mặt. Sinh ra trong gia đình làm nông nên em chỉ có một cây bút chì cùn để học, nhưng em lại rất thích học môn Mỹ thuật và cực kỳ sáng tạo. Dù thiếu thốn, em vẫn không ngừng học tập và tin rằng chỉ cần có đam mê, mọi khó khăn đều có thể vượt qua.
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
Gặp khó khăn rào cản ngôn ngữ nhất. Bên cạnh đó, còn khó khăn về Kinh tế và gặp phải định kiến
                        `,
                    "profile": `
Nhỏ con, lanh lợi, môn nào học cũng giỏi nhưng cứ đến giờ chính tả là cuống cuồng. Từ nhỏ đã quen tiếp xúc với tiếng Khmer, nên khi vào cấp 1, cậu bé gặp không ít khó khăn với môn học này. Mỗi lần đọc bài trước lớp, em hồi hộp sợ viết sai, phát âm sai. Dù đôi lúc buồn vì bị trừ điểm, nhưng em vẫn kiên trì tìm cách chinh phục môn học này.
                    `
                }
            }
        }
    }
    var onSelectButton = async function (action) {
        if (action == 1) {
            SetGenerateChat(getCharacter()["story"]["profile"]);
        } else if (action == 2) {
            SetGenerateChat(getCharacter()["story"]["diff"]);
        } else {
            var message = {
                "profile": getCharacter()["story"]["profile"],
                "diff": getCharacter()["story"]["diff"],
                "card": getCard()
            }
            console.log(message)
            await generateAI(message);
        }
    }
    var getCard = function () {
        var count = 0;
        var cardContent = "";
        if (myCard["nhanuoc"] == "Đã sử dụng") {
            count++;
            cardContent += `
${count}.
Miễn/giảm học phí và hỗ trợ học bổng 🎓
Cải thiện cơ sở vật chất trường học 🏫
Tổ chức lớp học song ngữ, bảo tồn văn hóa Khmer 
            `;
        }
        if (myCard["giaovien"] == "Đã sử dụng") {
            count++;
            cardContent += `
${count}.
Được hỗ trợ giảng dạy tận tình 🎓
Cung cấp tài liệu và lớp học bổ trợ 📖
Định hướng tương lai, truyền động lực 🌟
            `;
        }
        if (myCard["cohoi"] == "Đã sử dụng") {
            count++;
            cardContent += `
${count}.
Sự nỗ lực của các em, cùng sự hỗ trợ từ cộng đồng và sinh viên, mở ra cơ hội để vươn lên trong học tập và cuộc sống.
            `;
        }
        return cardContent;
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
                    <h1 className={styles.page_title}>EM MER</h1>
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