import { ITimesheet } from 'src/interfaces/timesheet';
import Button from '../Button';
import Input from '../Input';

interface ITimesheetItem extends ITimesheet {
  onOpenConfirmModal: (id: string) => void;
}
const TimesheetItem = ({
  id,
  hour,
  comment,
  record,
  onOpenConfirmModal
}: ITimesheetItem): React.ReactElement => {
  return (
    <li className="px-5 py-3 m-auto mb-3 w-full border-2 border-solid rounded">
      <div className="text-right mb-2">
        <Button
          size="sm"
          bgColor="danger"
          textContent="Delete"
          onClick={() => onOpenConfirmModal(id)}
        />
      </div>
      <div className="grid grid-cols-6 ">
        <div className="col-span-2 row-start-2">
          <label>Hours</label>
          <Input name="hours" type="text" size="md" value={hour.toString()} disabled />
        </div>

        <div className="col-start-3 col-span-3 mb-5">
          <label>Records</label>
          <Input name="records" type="text" size="md" value={record} disabled />
        </div>

        <div className="row-start-2 col-span-4">
          <label>Comments</label>
          <textarea
            className="form-control block w-full px-3 py-1.5 text-baseb font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            name="comments"
            value={comment}
            disabled
          />
        </div>
      </div>
    </li>
  );
};

export default TimesheetItem;
