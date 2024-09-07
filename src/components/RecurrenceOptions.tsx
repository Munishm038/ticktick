"use client"
import { ChangeEvent, useState } from 'react';
import useDatePickerStore from '../store/useDatePickerStore';

const RecurrenceOptions: React.FC = () => {
    const { recurrence, setRecurrence, setInterval } = useDatePickerStore();
    const [interval, setLocalInterval] = useState<number>(1);

    const handleRecurrenceChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setRecurrence(e.target.value as 'daily' | 'weekly' | 'monthly' | 'yearly');
    };

    const handleIntervalChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value);
        setLocalInterval(value);
        setInterval(value);
    };

    return (
        <div>
            <h2 className="text-lg font-bold mb-2">Recurrence Options</h2>
            <div className="mb-4">
                <label className="block mb-1">Recurrence Pattern</label>
                <select
                    value={recurrence}
                    onChange={handleRecurrenceChange}
                    className="border p-2 rounded"
                >
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                    <option value="yearly">Yearly</option>
                </select>
            </div>
            <div className="mb-4">
                <label className="block mb-1">Every X</label>
                <input
                    type="number"
                    value={interval}
                    onChange={handleIntervalChange}
                    className="border p-2 rounded"
                />
            </div>
        </div>
    );
};

export default RecurrenceOptions;
