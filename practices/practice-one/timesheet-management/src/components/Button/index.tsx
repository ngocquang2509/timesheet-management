export enum ButtonSize {
  SMALL = 'text-sm',
  MEDIUM = 'text-md',
  LARGE = 'text-lg'
}

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  textContent?: string;
  size?: ButtonSize;
  bgColor?: string;
  onClick?: () => void;
}

export const Button = ({
  textContent,
  bgColor,
  size = ButtonSize.MEDIUM,
  onClick,
  ...rest
}: IButton): React.ReactElement => (
  <button
    className={`${size} ${bgColor} text-white text-center px-5 py-2.5 mr-2 mb-2 rounded-lg `}
    onClick={onClick}
    {...rest}
  >
    {textContent}
  </button>
);
