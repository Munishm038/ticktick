"use client"
import { ChangeEvent } from 'react';
import useDatePickerStore from '../store/useDatePickerStore';

const DateRange: React.FC = () => {
  const { startDate, endDate, setStartDate, setEndDate } = useDatePickerStore();

  const handleStartDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEndDate(e.target.value);
  };

  return (
    <div className="mb-4">
      <h2 className="text-lg font-bold mb-2">Date Range</h2>
      <div className="mb-2">
        <label className="block mb-1">Start Date</label>
        <input
          type="date"
          value={startDate || ''}
          onChange={handleStartDateChange}
          className="border p-2 rounded"
        />
      </div>
      <div>
        <label className="block mb-1">End Date</label>
        <input
          type="date"
          value={endDate || ''}
          onChange={handleEndDateChange}
          className="border p-2 rounded"
        />
      </div>
    </div>
  );
};

export default DateRange;
