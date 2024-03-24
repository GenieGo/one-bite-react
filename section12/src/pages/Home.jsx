import { useSearchParams } from "react-router-dom";
const Home = () => {
  const [params, setParams] = useSearchParams();
  // console.log(params.value)
  // /?value=11

  return <div>Home</div>;
};

export default Home;
