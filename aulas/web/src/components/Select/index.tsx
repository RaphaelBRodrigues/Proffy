import React , {SelectHTMLAttributes} from "react";
import './styles.css';

interface selectProps extends SelectHTMLAttributes<HTMLSelectElement>{
    label: string;
    name:string;
    options:Array<{
      value:string,
      label:string
    }>;
}

const select:React.FC<selectProps> = ({ label , name,options, ...rest}) => {
  return (
    <div className="select-block">
      <label htmlFor={name}>{label}</label>
      <select value="" id={name} {...rest}>
      {options.map((opt,i) => {
        return <option key={opt.value} value={opt.value}>{opt.label}</option>
      })}      
        
        </select>
    </div>
  );
};

export default select;