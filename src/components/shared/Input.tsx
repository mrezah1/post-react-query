import React, { AllHTMLAttributes } from "react";
import { Field } from "rc-field-form";

// interface FieldAttribute extends InputHTMLAttributes<HTMLInputElement>,TextareaHTMLAttributes<HTMLTextAreaElement>;
interface InputProps extends AllHTMLAttributes<HTMLElement> {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  isArea?: boolean;
  validations?: object[];
  err: string;
}

const MyInput: React.FC<InputProps> = ({
  name,
  label,
  required = true,
  type = "text",
  err,
  isArea = false,
  validations = [],
  ...rest
}) => {
  return (
    <Field
      name={name}
      rules={[
        { required: required, message: `${name} is required!` },
        ...validations,
      ]}
    >
      <div className="input-item">
        <label htmlFor={name}>{label}</label>
        {isArea ? (
          <textarea
            id={name}
            {...rest}
            {...(err ? { style: { borderColor: "#f84f4f" } } : {})}
          />
        ) : (
          <input
            {...(err ? { style: { borderColor: "#f84f4f" } } : {})}
            id={name}
            type={type}
            {...rest}
          />
        )}
        {err && <p style={{ color: "#f84f4f" }}>{err}</p>}
      </div>
    </Field>
  );
};
export default MyInput;
