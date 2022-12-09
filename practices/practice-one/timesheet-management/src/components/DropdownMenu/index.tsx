import { DropdownOption } from 'interfaces/DropdownOption';

interface IDropdownMenu extends Omit<React.ComponentPropsWithoutRef<'select'>, 'size'> {
  options: DropdownOption[];
}

const DropdownMenu = ({ options, ...selectProps }: IDropdownMenu): React.ReactElement => (
  <select
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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