import { Wrapper } from "src/components/shared/Card";
import BlogList from "../Posts/List";
import Post from "../Posts/Post";
import CreateBlog from "../Posts/Create";
import { Outlet } from "react-router-dom";
import { useLocation, useParams } from "react-router-dom";
import "./style.scss";

const Home = () => {
  const { state } = useLocation();
  const { id } = useParams();
  if (!state && id) return <Outlet />;
  return (
    <>
      <BlogList />
      {id && <Post />}
      <CreateBlog />
    </>
  );
};
export default Home;
