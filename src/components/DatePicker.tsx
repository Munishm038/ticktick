import RecurrenceOptions from './RecurrenceOptions';
import DateRange from './DateRange';
import VisualPreview from './VisualPreview';

const DatePicker: React.FC = () => {
  return (
    <div className="p-4 bg-white shadow rounded">
      <RecurrenceOptions />
      <DateRange />
      <VisualPreview />
    </div>
  );
};

export default DatePicker;
