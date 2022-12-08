interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  textContent?: string;
  size?: string;
  bgColor?: string;
  onClick?: () => void;
}

export const Button = ({
  textContent,
  bgColor,
  size = 'md',
  onClick,
  ...rest
}: IButton): React.ReactElement => (
  <button
    className={`${bgColor} text-white text-center px-5 py-2.5 mr-2 mb-2 rounded-lg ${
      size === 'sm' ? 'text-sm' : size === 'lg' ? 'text-lg' : size
    }`}

    onClick={onClick}
    {...rest}
  >
    {textContent}
  </button>
);
