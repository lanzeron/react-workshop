import React, { useState, useMemo } from 'react';
import DatePicker from "react-datepicker";
import { GrFormNext } from 'react-icons/gr';
import { GrFormPrevious } from 'react-icons/gr';
import Table from './Table';
import './styles.css';
import "react-datepicker/dist/react-datepicker.css";

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);
  const [date, setDate] = useState(new Date());
  const formattedDay = useMemo(() => {
    const dateObj = new Date(date);
    return `${dateObj.getFullYear()}-${dateObj.getMonth() + 1}-${dateObj.getDate()}`
  }, [date]);
  return (
    <aside style={{
      width: expanded ? '40%' : '50px'
    }}>
      <div>
        <div onClick={() => setExpanded(state => !state)}>
          {
            expanded
              ? <GrFormPrevious size='30px' />
              : <GrFormNext size='30px' />

          }
        </div>
      </div>
      {
        expanded && (
          <div className='body'>
            <div>
              <DatePicker selected={date} onChange={date => setDate(date)}/>
              <span>Оберіть дату</span>
            </div>
            <Table />
          </div>
        )
      }
    </aside>
  )
};

export default Sidebar;
