import React from "react";
import Card from "../shared/Card";
import { CardEnum, SectionCardProps } from "src/types";

import CreateForm from "./CreateForm";

const Create: React.FC<SectionCardProps> = ({ order, onDrop }) => {
  return (
    <Card
      className="custom-scrollbar"
      style={{ order }}
      id={CardEnum.create}
      align="center"
      onDrop={onDrop}
    >
      <h2>Create Blog</h2>
      <CreateForm />
    </Card>
  );
};
export default React.memo(Create);
