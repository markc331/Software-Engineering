import * as React from 'react';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';

/*** CALENDAR COMPONENT */
const Calendar = () => {
  const [value, setValue] = React.useState(() => dayjs('2022-12-01T00:00'));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticDatePicker
        onChange={(newValue) => setValue(newValue)}
        value={value}
        renderInput={(params) => <TextField {...params} />}
        componentsProps={{
          actionBar: {
            actions: ['today'],
          },
        }}
      />
    </LocalizationProvider>
  );
}

export default Calendar;
