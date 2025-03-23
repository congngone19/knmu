import style from './style/style_card.module.css'
import nha_nuoc from './style/nha_nuoc_card.png'
import co_hoi from './style/cohoi_card.png'
import giao_vien from './style/giaovien_card.png'
function Card(props) {
    var getCard = function () {
        if (props.card.type == "nhanuoc") {
            return {
                "image": nha_nuoc,
                "background": "#17EB89",
                "status": props.card.myCard["nhanuoc"]
            };
        } else if (props.card.type == "giaovien") {
            return {
                "image": giao_vien,
                "background": "#FF92CB",
                "status": props.card.myCard["giaovien"]
            };
        }
        else {
            return {
                "image": co_hoi,
                "background": "#5DAEFF",
                "status": props.card.myCard["cohoi"]
            };
        }
    }
    var onChangeCard = function () {
        if (props.card.type == "nhanuoc") {
            props.card.setMyCard({
                "nhanuoc": "Đã sử dụng",
                "giaovien": "Sử dụng",
                "cohoi": "Sử dụng"
            });
        } else if (props.card.type == "giaovien") {
            props.card.setMyCard({
                "nhanuoc": "Sử dụng",
                "giaovien": "Đã sử dụng",
                "cohoi": "Sử dụng"
            });
        } else {
            props.card.setMyCard({
                "nhanuoc": "Sử dụng",
                "giaovien": "Sử dụng",
                "cohoi": "Đã sử dụng"
            });
        }
    }
    return (
        <div className={style.card_frame} style={{ border: `2px solid ${getCard()["background"]}` }}>
            <img src={getCard()["image"]} className={style.card_image} />
            <div className={style.card_button} style={{ background: `${getCard()["background"]}` }} onClick={onChangeCard}>
                {getCard()["status"]}
            </div>
            <div className={style.card_des} style={{ background: `${getCard()["background"]}` }}>
                <h4 style={{ color: "white" }}>{props.card.title}</h4>
                <div>*Lưu ý: Thẻ chỉ có giá trị sử dụng 1 lần</div>
            </div>
        </div>
    );
}

export default Card;