import { FC } from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export const Input: FC = ({ ...props }) => {
  return <DatePicker {...props} />;
};
