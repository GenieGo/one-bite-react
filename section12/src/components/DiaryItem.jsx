import "./DiaryItem.scss";
import { getEmotionImage } from "./../util/get-emotion.image";
import Button from "./Button";
const DiaryItem = () => {
  const emotionId = 1;
  return (
    <div className="DiaryItem">
      <div className={`img_section img_seciotn_${emotionId}`}>
        <img src={getEmotionImage(1)} alt="" />
      </div>
      <div className="info_section">
        <div className="created_date">{new Date().toLocaleDateString()}</div>
        <div className="content">content</div>
      </div>
      <div className="button_section">
        <Button text={"수정하기"} />
      </div>
    </div>
  );
};
export default DiaryItem;
