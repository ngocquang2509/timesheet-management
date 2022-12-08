interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  textContent?: string;
  bgColor?: string;
  onClick?: () => void;
}

export const Button = ({
  textContent,
  bgColor,
  onClick,
  ...rest
}: IButton): React.ReactElement => (
  <button
    className={`${bgColor} text-white text-center px-5 py-2.5 mr-2 mb-2 rounded-lg`}
    onClick={onClick}
    {...rest}
  >
    {textContent}
  </button>
);
