import React from 'react';
import { shallow } from 'enzyme';
import TableHeader from '../../components/TableHeader';

describe('boundary', () => {
    let wrapper;
    const columns = ['id', 'name', 'age', 'city'];
    const mockOnSort = jest.fn();

    beforeEach(() => {
        wrapper = shallow(<TableHeader columns={columns} onSort={mockOnSort} />);
    });

    it('TableHeaderComponent boundary should render without crashing', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('TableHeaderComponent boundary should render the correct number of columns', () => {
        const headers = wrapper.find('th');
        expect(headers).toHaveLength(columns.length);
    });

    it('TableHeaderComponent boundary should display the correct column names', () => {
        const headers = wrapper.find('th');
        headers.forEach((header, index) => {
            expect(header.text()).toBe(columns[index]);
        });
    });

    it('TableHeaderComponent boundary should call onSort with the correct column when header is clicked', () => {
        const header = wrapper.find('th').at(0);
        header.simulate('click');
        expect(mockOnSort).toHaveBeenCalledWith(columns[0]);
    });
});
