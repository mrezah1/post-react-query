import React, { useState } from "react";
import Form, { Field, useWatch } from "rc-field-form";
import toast from "react-hot-toast";
import { useQueryClient } from "react-query";
import Card from "../shared/Card";
import Input from "src/components/shared/Input";
import { createPost } from "src/api";

const MyForm = () => {
  const queryClient = useQueryClient();
  const onFinish = async (values) => {
    const waiting = toast.loading("please wait...");
    const res = await createPost(values);
    if (res.ok) {
      toast.dismiss(waiting);
      toast.success("create post successfuly");
      // update list posts
      queryClient.invalidateQueries("posts");
    }
  };
  return (
    <Form onFinish={onFinish} onFinishFailed={(a) => console.log("Err")}>
      {(values, form) => {
        const errors = form.getFieldsError();
        const getErr = (name) => {
          const err = errors.find((i) => i?.name[0] === name);
          return err ? err.errors[0] : "";
        };
        return (
          <>
            <Input
              name="title"
              label="Title"
              placeholder="Enter Title..."
              err={getErr("title")}
              validations={[
                { min: 5, message: "Title must be more than 5 characters" },
              ]}
            />
            <Input
              name="author"
              label="Author fullname"
              placeholder="Enter author fullname..."
              err={getErr("author")}
              validations={[
                { min: 5, message: "Fullname must be more than 5 characters" },
              ]}
            />
            <Input
              isArea
              name="body"
              label="Description"
              placeholder="Enter placeholder..."
              rows={4}
              err={getErr("body")}
              validations={[
                {
                  min: 10,
                  message: "Description must be more than 10 characters",
                },
              ]}
            />
            <button
              disabled={errors.some((i) => !!i.errors.length)}
              className="create-btn"
            >
              Submit
            </button>
          </>
        );
      }}
    </Form>
  );
};

const Create: React.FC = () => {
  return (
    <Card className="custom-scrollbar">
      <div style={{ textAlign: "center" }}>
        <h2>Create Blog</h2>
        <MyForm />
      </div>
    </Card>
  );
};
export default React.memo(Create);
