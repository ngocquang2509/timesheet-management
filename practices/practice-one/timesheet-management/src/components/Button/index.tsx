interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  textContent?: string;
  size?: string;
  bgColor?: string;
}

const Button = ({
  textContent,
  bgColor,
  size,
  ...rest
}: IButton): React.ReactElement => {
  const baseClass = 'text-white text-center px-5 py-2.5 mr-2 mb-2 rounded-lg';
  const classes = [
    baseClass,

    size === 'sm' ? 'text-sm w-20' : '',
    size === 'md' ? 'text-md w-36' : '',
    size === 'lg' ? 'text-lg w-48' : '',


    bgColor === 'primary' ? 'bg-sky-500 hover:bg-sky-600' : '',
    bgColor === 'info' ? 'bg-green-500 hover:bg-green-600' : '',
    bgColor === 'danger' ? 'bg-red-500 hover:bg-red-600' : ''
  ].join(' ');

  return (
    <button className={`${classes}`} {...rest}>
      {textContent}
    </button>
  );
};

export default Button