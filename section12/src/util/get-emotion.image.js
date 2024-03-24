import emotion1 from "../assets/emotion1.png";
import emotion2 from "../assets/emotion2.png";
import emotion3 from "../assets/emotion3.png";
import emotion4 from "../assets/emotion4.png";
import emotion5 from "../assets/emotion5.png";

export function getEmotionImage(emotionId = 1) {
  const emotions = [emotion1, emotion2, emotion3, emotion4, emotion5];
  return emotions[emotionId - 1];
}
