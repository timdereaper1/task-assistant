import { render, screen } from '@testing-library/react';
import Index from 'tat/pages';

test('should render page correctly', () => {
	render(<Index />);
	expect(screen.getByText('Hello world')).toBeInTheDocument();
});
