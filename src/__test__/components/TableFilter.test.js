import React from 'react';
import { shallow } from 'enzyme';
import TableFilter from '../../components/TableFilter';

describe('boundary', () => {
    let wrapper;
    const columns = ['id', 'name', 'age', 'city'];
    const mockOnFilter = jest.fn();

    beforeEach(() => {
        wrapper = shallow(<TableFilter columns={columns} onFilter={mockOnFilter} />);
    });

    it('TableFilterComponent boundary should render without crashing', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('TableFilterComponent boundary should render the correct number of input fields', () => {
        const inputs = wrapper.find('input');
        expect(inputs).toHaveLength(columns.length);
    });

    it('TableFilterComponent boundary should call onFilter with correct arguments when input value changes', () => {
        const input = wrapper.find('input').at(0);
        input.simulate('change', { target: { value: 'test' } });
        expect(mockOnFilter).toHaveBeenCalledWith(columns[0], 'test');
    });

    it('TableFilterComponent boundary should display correct placeholders in input fields', () => {
        const inputs = wrapper.find('input');
        inputs.forEach((input, index) => {
            expect(input.prop('placeholder')).toBe(`Filter by ${columns[index]}`);
        });
    });
});
