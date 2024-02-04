import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClientProvider, QueryClient } from "react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Home from "./components/Home";
import Post from "./components/Posts/Post";
import { Wrapper } from "./components/shared/Card";
import "./App.scss";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: Infinity,
    },
  },
});
function App() {
  return (
    <QueryClientProvider client={queryClient}>
        <Wrapper>
          <Router>
            <Routes>
              <Route path="/" element={<Home />}>
                <Route path="/posts/:id" element={<Post />} />
              </Route>
            </Routes>
          </Router>
          <Toaster position="bottom-right" />
        </Wrapper>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
