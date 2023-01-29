import React from "react";

type Props = {color: string, label: string} & React.ComponentProps<'button'>

const colorVariants : {[s: string]: string} = {
  blue: 'bg-blue-500 hover:bg-blue-700 border-blue-700',
  red: 'bg-red-500 hover:bg-red-700 border-red-700',
}

const Button: React.FC<Props> = ({color, label, onClick, disabled, ...rest}) => <button
  disabled={disabled}
  className={`${colorVariants[color]} text-white font-bold py-2 px-4 border  rounded cursor-pointer`} onClick={(e) => {
  e.preventDefault();
  !!onClick && onClick(e);
}} {...rest}>
  {label}
</button>;

export default Button;
