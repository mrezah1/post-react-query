import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Card from "../shared/Card";
import { useSinglePost } from "src/hooks";
import SkeletonLoading from "./skeleton/Post";

const Post: React.FC = () => {
  const { id } = useParams();
  const { data, isLoading } = useSinglePost({ id });
  const [post] = data || [];
  return (
    <Card w={45} className="custom-scrollbar">
      {isLoading ? (
        <SkeletonLoading />
      ) : (
        <div className="list-posts">
          <li>
            <div>
              <div>
                <img
                  src={`https://randomuser.me/api/portraits/thumb/men/${post.title.length}.jpg`}
                  alt={post.author}
                />
                <h4>{post.author}</h4>
              </div>
              <p>{post.date}</p>
            </div>
            <p style={{ textAlign: "right" }}>
              {(post.title.length - post.title.length * 0.4).toFixed(0)} Min
              read
            </p>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        </div>
      )}
    </Card>
  );
};
export default React.memo(Post);
