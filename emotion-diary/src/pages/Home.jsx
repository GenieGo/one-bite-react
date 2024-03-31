import Header from "../components/Header";
import Button from "../components/Button";
const Home = () => {
  return (
    <div>
      <Header
        leftChild={<Button text="<" />}
        title="2024년 3월"
        rightChild={<Button text=">" />}
      />
    </div>
  );
};
export default Home;
