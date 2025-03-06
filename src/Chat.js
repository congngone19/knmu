import { useLocation } from 'react-router-dom';
import styles from './style/styles_chat.module.css'

function Chat() {
    var {state} = useLocation();
    return (
        <div>
            <main>
                <br /><br />
                <section className={styles.top_bar}>
                    <div className={styles.character_info}>
                        <img src="background.jpg" alt="Nhân vật" />
                        <span className={styles.character_name}>{state.user.name}</span>
                    </div>
                    <h1 className={styles.page_title}>TRANG GIỮ CHUỖI</h1>
                    <div className={styles.menu}>
                        <img className={styles.chain_count} src="Logo-KhoiNguonMerUoc.png" alt="Khởi nguồn mơ ước" style={{ width: "25%", marginLeft: "70%" }} />
                    </div>
                </section>
                <br /><br />
                <section className={styles.bot}>

                </section>
                <br /><br />
            </main>

            <footer>
                <p>Contact us:</p>
                <img src="email-icon.png" alt="Email" />
                <img src="facebook-icon.png" alt="Facebook" />
            </footer>
        </div>
    );
}
export default Chat;