import axios from "axios";

type PostType = {
  title: string;
  body: string;
  author: string;
};

const client = axios.create({
  baseURL:
    "https://us-east-1.aws.data.mongodb-api.com/app/application-0-riotp/endpoint",
});

const getAllPosts = async () => {
  const { data } = await client.get("/posts");
  return data;
};
const getSinglePost = async (params: { id: string }) => {
  const { data } = await client.get("/posts", { params });
  return data;
};
const createPost = async (body: PostType) => {
  const { data } = await client.post("/posts", body);
  return data;
};
export { getAllPosts, getSinglePost, createPost };
