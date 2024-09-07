"use client"
import { useEffect, useState } from 'react';
import useDatePickerStore from '../store/useDatePickerStore';

const VisualPreview: React.FC = () => {
  const { recurrence, interval, startDate, endDate } = useDatePickerStore();
  const [dates, setDates] = useState<Date[]>([]);

  useEffect(() => {
    if (startDate && endDate) {
        const start = new Date(startDate);
        const end = endDate ? new Date(endDate) : null;
        let current = new Date(start);
        const tempDates: Date[] = [];
  
        const addDays = (date: Date, days: number) => {
          const result = new Date(date);
          result.setDate(result.getDate() + days);
          return result;
        };
  
        while (!end || current <= end) {
          tempDates.push(new Date(current));
          if (recurrence === 'daily') {
            current = addDays(current, interval);
          } else if (recurrence === 'weekly') {
            current = addDays(current, interval * 7);
          } else if (recurrence === 'monthly') {
            current.setMonth(current.getMonth() + interval);
          } else if (recurrence === 'yearly') {
            current.setFullYear(current.getFullYear() + interval);
          }
  
          if (end && current > end) {
            break;
          }
        }
  
        setDates(tempDates);
      }
  }, [recurrence, interval, startDate, endDate]);

  return (
    <div>
      <h2 className="text-lg font-bold mb-2">Visual Preview</h2>
      <div className="grid grid-cols-7 gap-2">
        {dates.map((date, index) => (
          <div key={index} className="p-2 border rounded text-center bg-blue-100">
            {date.toDateString()}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VisualPreview;
