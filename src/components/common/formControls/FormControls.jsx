import React from "react";
import s from "./FormControls.module.css";

export const FormControl = (Element) => ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div>
      <div className={s.dialogsForm + " " + (hasError && s.error)}>
        <Element {...input} {...props} />
        <div>{meta.error}</div>
      </div>
    </div>
  );
};

// export const Textarea = ({ input, meta, ...props }) => {
//   const hasError = meta.touched && meta.error;
//   return (
//     <div>
//       <div className={s.dialogsForm + " " + (hasError && s.error)}>
//         <textarea {...input} {...props} />
//         <div>{meta.error}</div>
//       </div>
//     </div>
//   );
// };

// export const Input = ({ input, meta, ...props }) => {
//   const hasError = meta.touched && meta.error;
//   return (
//     <div>
//       <div className={s.dialogsForm + " " + (hasError && s.error)}>
//         <input {...input} {...props} />
//         <div>{meta.error}</div>
//       </div>
//     </div>
//   );
// };
