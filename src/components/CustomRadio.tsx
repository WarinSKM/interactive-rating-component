import { FC, ChangeEventHandler, Dispatch, SetStateAction } from "react";

interface CustomRadioProp {
  id: string;
  name: string;
  value: number;
  onChange: Dispatch<SetStateAction<number>>;
  checked: number;
}

const CustomRadio: FC<CustomRadioProp> = ({ id, name, checked, value, onChange }) => {
  const onValueChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    onChange(parseInt(e.target.value));
  };
  return (
    <fieldset>
      <input className="peer sr-only" id={id} name={name} type="radio" checked={checked === value} value={value} onChange={onValueChange} />
      <label
        htmlFor={id}
        className="text-medium-grey bg-dark-blue rounded-full w-12 h-12 flex items-center justify-center cursor-pointer peer-checked:bg-light-grey peer-checked:text-white hover:bg-primary hover:text-white"
      >
        {value}
      </label>
    </fieldset>
  );
};

export { CustomRadio };
