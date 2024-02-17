import React, { Suspense, useCallback, useState } from "react";
import toast from "react-hot-toast";
import BlogList from "../Posts/List";
import CreateBlog from "../Posts/Create";
import { Outlet } from "react-router-dom";
import { useLocation, useParams } from "react-router-dom";
const Post = React.lazy(() => import("../Posts/Post"));
import "./style.scss";
import { CardStateType } from "src/types";

const Home = () => {
  const { state } = useLocation();
  const { id } = useParams();
  const [order, setOrder] = useState<CardStateType>({
    list: 1,
    post: 2,
    create: 3,
  });
  const dispatchOrder = useCallback(
    (event: React.DragEvent<HTMLDivElement>): void => {
      const type = event.dataTransfer.getData("id");
      const id = (event.target as HTMLDivElement).id;
      setOrder((prev: CardStateType) => ({
        ...prev,
        [type]: prev[id as keyof typeof prev],
        [id]: prev[type as keyof typeof prev],
      }));
      toast.success("Drag and Drop Done");
    },
    []
  );

  if (!state && id) return <Outlet />;
  return (
    <>
      <BlogList order={order.list} onDrop={dispatchOrder} />
      {id && (
        <Suspense fallback={<h2>Loading...</h2>}>
          <Post order={order.post} onDrop={dispatchOrder} />
        </Suspense>
      )}
      <CreateBlog order={order.create} onDrop={dispatchOrder} />
    </>
  );
};
export default Home;
