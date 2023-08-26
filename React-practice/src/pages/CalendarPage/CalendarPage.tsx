import { useState } from 'react';
import moment from 'moment';
import './CalendarPage.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function CalendarPage() {
  const [today, setToday] = useState(new Date());

  // react-calendar의 onChange 콜백 함수를 직접 콜백 함수 작성
  const onCalendarChange = (date: any) => {
    if (Array.isArray(date)) {
      // 선택한 날짜 배열이라면 첫 번째 날짜를 사용
      setToday(date[0]);
    } else {
      setToday(date);
    }
  };

  return (
    <div className="calendar-outer-box">
      <div className="calendar-intro-text">날짜 확인하기</div>
      <div className="calendar-inner-box">
        <Calendar
          onChange={onCalendarChange}
          value={today}
          next2Label={null}
          prev2Label={null}
          calendarType="ISO 8601"
        />
      </div>
      <div className="selected-date">
        선택한 날짜: {moment(today).format('YYYY년 MM월 DD일')}
      </div>
    </div>
  );
}

export default CalendarPage;
