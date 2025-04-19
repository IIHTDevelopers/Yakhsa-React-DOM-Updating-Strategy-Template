import React from 'react';
import { shallow } from 'enzyme';
import TableRow from '../../components/TableRow';

describe('boundary', () => {
    let wrapper;
    const rowData = ['1', 'John Doe', '28', 'New York'];

    beforeEach(() => {
        wrapper = shallow(<TableRow rowData={rowData} />);
    });

    it('TableRowComponent boundary should render without crashing', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('TableRowComponent boundary should render the correct number of cells', () => {
        const cells = wrapper.find('td');
        expect(cells).toHaveLength(rowData.length);
    });

    it('TableRowComponent boundary should display the correct data in each cell', () => {
        const cells = wrapper.find('td');
        cells.forEach((cell, index) => {
            expect(cell.text()).toBe(rowData[index]);
        });
    });
});
