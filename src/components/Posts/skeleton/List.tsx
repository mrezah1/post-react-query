import styled from "styled-components";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const MySkeleton = styled(Skeleton)`
  margin-bottom: .8rem;
  height: 1.5rem;
`;

const SkeletonCard = () => (
  <div style={{ marginBottom: 15 }}>
    <MySkeleton count={2} baseColor="#2e4052" highlightColor="#3c5166" />
    <div className="dflex jbetween">
      <div className="dflex">
        <MySkeleton
          circle
          style={{ width: 40, height: 40 }}
          baseColor="#2e4052"
          highlightColor="#3c5166"
        />
        <MySkeleton
          baseColor="#2e4052"
          highlightColor="#3c5166"
          style={{ width: 120, marginLeft: 10 }}
        />
      </div>
      <MySkeleton
        baseColor="#2e4052"
        highlightColor="#3c5166"
        style={{ width: 100 }}
      />
    </div>
  </div>
);
const SkeletonList = () => [1, 2, 3].map((i) => <SkeletonCard key={i} />);
export default SkeletonList;
