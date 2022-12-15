import { ITimesheet } from 'src/interfaces/timesheet';


interface SortOption {
  hours: boolean;
  createAt: boolean;
}

/**
 * Sort list time sheet by create at
 * @param {ITimesheet[]} listTimesheet: list timesheet that have not been sorted
 * @param {SortOption} { hours, createAt }:  sort option 
 * @returns {ITimesheet[]} list timesheet that have been sorted
 */
export const sortedTimesheetlist = (listTimesheet: ITimesheet[], { hours, createAt }: SortOption) => {
  if (hours) {
    listTimesheet.sort(
      (preTimesheet: ITimesheet, nextTimesheet: ITimesheet) =>
        +preTimesheet.hours - +nextTimesheet.hours
    );
  }
  if (createAt) {
    listTimesheet.sort((preTimesheet: ITimesheet, nextTimesheet: ITimesheet) => {
      const firstItem = new Date(preTimesheet.createdAt).getTime();
      const secondItem = new Date(nextTimesheet.createdAt).getTime();
      return secondItem - firstItem;
    });
  }
  return listTimesheet;
};
