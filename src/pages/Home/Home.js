import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col">
      <div>home</div>
      <Link to={"/test"}>test</Link>
      <div className="h-40 w-40 bg-slate-100 my-2"></div>
      <div className="h-40 w-40 bg-slate-100 my-2"></div>
      <div className="h-40 w-40 bg-slate-100 my-2"></div>
      <div className="h-40 w-40 bg-slate-100 my-2"></div>
      <div className="h-40 w-40 bg-slate-100 my-2"></div>
      <div className="h-40 w-40 bg-slate-100 my-2"></div>
      <div className="h-40 w-40 bg-slate-100 my-2"></div>
      <div className="h-40 w-40 bg-slate-100 my-2"></div>
    </div>
  );
};
export default Home;
