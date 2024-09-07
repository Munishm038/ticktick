import { render, screen } from '@testing-library/react';
import DatePicker from '@/components/DatePicker'

test('renders DatePicker with all sub-components', () => {
    render(<DatePicker />);
    
    expect(screen.getByText(/date picker component/i)).toBeInTheDocument();
});
