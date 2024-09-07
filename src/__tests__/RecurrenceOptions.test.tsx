import { render, screen, fireEvent } from '@testing-library/react';
import RecurrenceOptions from '@/components/RecurrenceOptions';

test('should change recurrence pattern', () => {
    render(<RecurrenceOptions />);
  
    const selectElement = screen.getByLabelText(/recurrence pattern/i) as HTMLSelectElement;
  
    fireEvent.change(selectElement, { target: { value: 'weekly' } });
  
    expect(selectElement.value).toBe('weekly');
  });