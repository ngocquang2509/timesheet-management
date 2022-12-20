import { DropdownOption } from 'interfaces/DropdownOption';

interface IDropdownMenu extends Omit<React.ComponentPropsWithoutRef<'select'>, 'size'> {
  options: DropdownOption[];
}

const DropdownMenu = ({ options, ...selectProps }: IDropdownMenu): React.ReactElement => (
  <select
    className="form-control block w-2/3 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
    {...selectProps}
  >
    {options.map((option) => (
      <option className="option" key={option.value} value={option.value}>
        {option.text}
      </option>
    ))}
  </select>
);

export default DropdownMenu;
