import { useField } from "formik";
import React from "react";
import classNames from "classnames";
interface InputProps {
  label: string;
  name: string;
}

const Input: React.FC<InputProps> = ({ label, ...props }) => {

  const [field, meta] = useField(props);
  
  return (
    <label className=" block">
      <div className="relative block">
        <span
          className={classNames("absolute  -translate-y-1/2 left-2 transition-all text-slate-500", {
            "top-1/2": !field?.value,
            "top-2 text-xs": field?.value,
          })}
        >
          {label}
        </span>
        <input
          type="text"
          autoComplete="off"
          className={classNames("border border-slate-800 text-sm rounded text-slate-800 outline-none w-full  px-2 transition-all",{
              "pt-3 pb-1": field?.value,
              "py-2": !field?.value
          })} 
          {...field}
          {...props}
        />
      </div>
      
        <p className="text-red-500 font-medium text-xs mt-1 h-4">
        {meta?.error && meta?.touched && (meta.error)}
       </p>
      
    </label>
  );
};

export default Input;
