import styled from "styled-components";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const MySkeleton = styled(Skeleton)`
  margin-bottom: 1.8rem;
  height: 1.5rem;
`;

const SkeletonCard = () => (
  <div style={{ marginBottom: 15 }}>
    <div className="dflex jbetween">
      <div className="dflex">
        <MySkeleton
          circle
          style={{ width: 50, height: 50 }}
          baseColor="#2e4052"
          highlightColor="#3c5166"
        />
        <MySkeleton
          baseColor="#2e4052"
          highlightColor="#3c5166"
          style={{ width: 150, height: 35, marginLeft: 15 }}
        />
      </div>
      <MySkeleton
        baseColor="#2e4052"
        highlightColor="#3c5166"
        style={{ width: 100, height: 35 }}
      />
    </div>
    <MySkeleton
      count={1}
      style={{ height: 45, marginBottom: "1rem" }}
      baseColor="#2e4052"
      highlightColor="#3c5166"
    />
    <MySkeleton
      count={1}
      style={{ height: 330 }}
      baseColor="#2e4052"
      highlightColor="#3c5166"
    />
  </div>
);
export default SkeletonCard;
