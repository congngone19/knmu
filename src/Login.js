import { useNavigate } from 'react-router-dom';
import myStyle from './style/index.module.css'
import { useState } from 'react';

function Login() {
    var navigate = useNavigate();
    var [user, setUser] = useState(
        {
            name: "",
            character: ""
        }
    );
    var goToChat = function () {
        navigate("/chat", { state: { user } })
    }
    var onChangeName = function (event) {
        setUser((current) => {
            return { ...current, name: event.target.value };
        })
    }
    return (
        <div className={myStyle.body}>
            <div className={myStyle.cus_container}>
                <div className={myStyle.right} style={{ width: "100%", justifyContent: "start" }}>
                    <img src="Logo-KhoiNguonMerUoc.png" alt="" width="50%" />
                    <input type="text" className='form-control' style={{ width: "50%" }} id="txtUser" placeholder="Lựa chọn nhân vật của bạn" onChange={onChangeName}/>
                    <br />
                    <div className={myStyle.buttons}>
                        <button className={`${myStyle.btn} ${myStyle.pink}`} onClick={goToChat}>Đăng nhập ngay</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;