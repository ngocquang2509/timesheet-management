interface IInput extends React.ComponentPropsWithoutRef<'input'> {
  type: string;
  placeholder?: string;
  value?: string;
  bgColor?: string;
  textColor?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  type,
  placeholder,
  value,
  bgColor,
  textColor,
  onChange,
  ...rest
}: IInput): React.ReactElement => {
  return (
    <input
      type={type}
      className={`${bgColor} ${textColor} py-2 px-4 rounded`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      {...rest}
    />
  );
};

export default Input;
