import { useSearchParams } from "react-router-dom";
const Home = () => {
  const [params, setParams] = useSearchParams();
  // /?value=11
  // console.log(params.value)

  return <div>Home</div>;
};

export default Home;
