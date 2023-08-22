// import { useState } from 'react';
import './CalendarPage.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
function CalendarPage() {
  // const [date, setDate] = useState(new Date());
  // const handleChange = (value: Date) => {
  //   setDate(value);
  // };

  const date = new Date();
  return (
    <div>
      <div>CalendarPage</div>
      <Calendar value={date} />
    </div>
  );
}

export default CalendarPage;
