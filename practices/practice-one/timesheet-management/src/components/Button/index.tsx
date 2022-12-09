interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  textContent?: string;
  size?: string;
  bgColor?: string;
  onClick?: () => void;
}

const Button = ({
  textContent,
  bgColor,
  size,
  onClick,
  ...rest
}: IButton): React.ReactElement => {
  const baseClass = 'text-white text-center px-5 py-2.5 mr-2 mb-2 rounded-lg';
  const classes = [
    baseClass,

    size === 'sm' ? 'text-sm' : '',
    size === 'md' ? 'text-md' : '',
    size === 'lg' ? 'text-lg' : '',

    bgColor === 'primary' ? 'bg-sky-500 hover:bg-sky-600' : '',
    bgColor === 'info' ? 'bg-green-500 hover:bg-green-600' : '',
    bgColor === 'danger' ? 'bg-red-500 hover:bg-red-600' : ''
  ].join(' ');

  return (
    <button className={`${classes}`} onClick={onClick} {...rest}>
      {textContent}
    </button>
  );
};

export default Button