import Header from "../components/Header";
import Button from "../components/Button";

import { DiaryStateContext } from "./../App";
import { useContext, useState } from "react";

const getMonthlyData = (pivotDate, data) => {
  const beginTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth(),
    1,
    0,
    0,
    0
  ).getTime();
  const endTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth() + 1,
    0,
    23,
    59,
    59
  ).getTime();
  return data.filter(
    (item) => beginTime <= item.createdDate && endTime >= item.createdDate
  );
};

const Home = () => {
  const data = useContext(DiaryStateContext);
  const [pivotDate, setPivotDate] = useState(new Date());
  const monthlyData = getMonthlyData(pivotDate, data);
  console.log(monthlyData);
  const onIncreaseDate = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  };
  const onDecreaseDate = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };
  return (
    <div>
      <Header
        leftChild={<Button text="<" onClick={onDecreaseDate} />}
        title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
        rightChild={<Button text=">" onClick={onIncreaseDate} />}
      />
    </div>
  );
};
export default Home;
