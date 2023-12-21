import { useQuery } from "react-query";
import * as api from "../api";

const useAllPosts = () => {
  return useQuery("posts", api.getAllPosts);
};
const useSinglePost = (query: { id: string }) => {
  return useQuery({
    queryKey: ["post", query.id],
    queryFn: () => api.getSinglePost(query),
  });
};
export { useAllPosts, useSinglePost };
