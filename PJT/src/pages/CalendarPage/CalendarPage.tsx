// import { useState } from 'react';
import CalendarPageLayout from 'layout/CalendarPageLayout/CalendarPageLayout';
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
    <CalendarPageLayout>
      <div>CalendarPage</div>
      <Calendar value={date} />
      <div>Footer</div>
    </CalendarPageLayout>
  );
}

export default CalendarPage;
