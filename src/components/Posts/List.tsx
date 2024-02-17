import React from "react";
import { Link } from "react-router-dom";
import { CardEnum, SectionCardProps, PostType } from "src/types";

import { Card } from "../shared/Card";
import { useAllPosts } from "src/hooks";
import SkeletonLoading from "./skeleton/List";

const List: React.FC<SectionCardProps> = ({ order, onDrop }) => {
  const { data, isLoading } = useAllPosts();

  return (
    <Card
      className="custom-scrollbar"
      style={{ order }}
      id={CardEnum.list}
      onDrop={onDrop}
    >
      {isLoading ? (
        <SkeletonLoading />
      ) : (
        <ul className="list-posts">
          {data.map((i: PostType) => (
            <li key={i._id}>
              <h2>
                <Link to={`/posts/${i._id}`} state={{ test: "A" }}>
                  {i.title}
                </Link>
              </h2>
              <p>
                Aliqua esse consectetur ipsum do reprehenderit non cillum
                deserunt...
              </p>
              <div>
                <div>
                  <img
                    src={`https://randomuser.me/api/portraits/thumb/men/${i?.title?.length}.jpg`}
                    alt={i.author}
                  />
                  <h4>{i.author}</h4>
                </div>
                <p>
                  {(i.title.length - i.title.length * 0.4).toFixed(0)} Min read
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
};
export default React.memo(List);
