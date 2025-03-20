import { useNavigate } from 'react-router-dom';
import myStyle from './style/index.module.css';
import preLogo from './style/IMG_0668.PNG';

function IndexPage() {
    var navigate = useNavigate();
    return (
        <div className={myStyle.body}>
            <div className={myStyle.cus_container}>
                <div className={myStyle.left}>
                    <img src={preLogo} alt="Khơi nguồn mơ ước" className={myStyle.background} />
                    {/* <div className={myStyle.text_overlay}>
                        <h2>CHIẾN DỊCH</h2>
                        <h1>
                            <img src="Logo-KhoiNguonMerUoc.png" alt="" style={{ width: "50%", marginLeft: "25%" }} />
                        </h1>
                    </div> */}
                </div>
                <div className={myStyle.right}>
                <div className={myStyle.mask}></div>
                    <h2>Chào mừng bạn đến với</h2>
                    <img src="Logo-KhoiNguonMerUoc.png" alt="" width="50%" />
                    <br />
                    <div className={myStyle.buttons}>
                        <button className={`${myStyle.btn} ${myStyle.pink}`} onClick={() => navigate("/Login")}>Đăng nhập ngay</button>
                    </div>
                </div>
            </div >
        </div>
    );
}

export default IndexPage;
