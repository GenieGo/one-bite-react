import { useEffect } from "react";

const Even = () => {
  useEffect(() => {
    // 클린업, 정리함수
    // unMount될때 정리함수가 실행된다.
    return () => {
      console.log("unMount");
    };
  }, []);
  return <div>짝수</div>;
};
export default Even;
