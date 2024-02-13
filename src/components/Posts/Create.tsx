import React from "react";
import Card from "../shared/Card";
import { SectionCardProps } from "src/types";

import CreateForm from "./CreateForm";

const Create: React.FC<SectionCardProps> = ({ order, onDrop }) => {
  console.log("Create Trigger");
  return (
    <Card
      className="custom-scrollbar"
      align="center"
      style={{ order }}
      id="create"
      onDrop={onDrop}
    >
      <h2>Create Blog</h2>
      <CreateForm />
    </Card>
  );
};
export default React.memo(Create);
