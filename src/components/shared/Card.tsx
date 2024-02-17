import React, {
  useState,
  ReactNode,
  HTMLAttributes,
} from "react";
import styled from "styled-components";

interface WrapperProps {
  justify?: string;
}
const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex: 1;
  justify-content: ${(props) => props.justify || "space-between"};
  align-items: center;
  height: 100vh;
  padding: 2rem 1rem;
`;
interface CardProps {
  w?: number;
  dragging?: boolean;
}
const Card = styled.div<CardProps>`
  height: 100%;
  width: 100%;
  padding: 1rem 2rem;
  overflow-y: auto;
  margin: 0 1rem;
  background: linear-gradient(145deg, #1d2835, #273647);
  border-radius: 15%;
  box-shadow: 9.91px 9.91px 15px #1f2b38, -9.91px -9.91px 15px #253344;
  border-radius: 10px;
`;

interface DragCardProps extends HTMLAttributes<HTMLElement> {
  align?: "left" | "right" | "center";
  children: ReactNode;
  onDrop?: (event: React.DragEvent<HTMLDivElement>) => void;
}

const DragCard: React.FC<DragCardProps> = ({
  children,
  align = "left",
  onDrop,
  ...rest
}) => {
  const [isDroping, setIsDroping] = useState(false);
  return (
    <Card
      onDragOver={(event: React.DragEvent<HTMLDivElement>) =>
        event.preventDefault()
      }
      onDragEnter={() => setIsDroping(true)}
      onDragStart={(event: React.DragEvent<HTMLDivElement>) => {
        setIsDroping(true);
        event.dataTransfer.setData("id", (event.target as HTMLDivElement).id);
      }}
      onDrop={(event: React.DragEvent<HTMLDivElement>) => {
        // solution 1 :
        if (onDrop) onDrop(event);
        setIsDroping(false);

        // solution 2 :
        // const dragId = event.dataTransfer.getData("id");
        // const dragElement = document.getElementById(dragId);
        // const dragOrder = dragElement?.style.order;
        // if (dragElement) {
        //   dragElement.style.order = event.target.style.order;
        //   event.target.style.order = dragOrder;
        // }
      }}
      onDragEnd={() => setIsDroping(false)}
      onDragLeave={() => setIsDroping(false)}
      draggable="true"
      dragging={Boolean(isDroping)}
      {...rest}
    >
      <div
        style={{
          textAlign: align,
          pointerEvents: isDroping ? "none" : "auto",
        }}
      >
        {children}
      </div>
    </Card>
  );
};

export default DragCard;
export { Wrapper, Card };
