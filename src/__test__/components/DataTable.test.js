import React from 'react';
import { shallow } from 'enzyme';
import DataTable from '../../components/DataTable';
import TableHeader from '../../components/TableHeader';
import TableRow from '../../components/TableRow';
import TableFilter from '../../components/TableFilter';

describe('boundary', () => {
    let wrapper;
    const columns = ['id', 'name', 'age', 'city'];
    const data = [
        { id: 1, name: 'John Doe', age: 28, city: 'New York' },
        { id: 2, name: 'Jane Smith', age: 32, city: 'Los Angeles' },
        { id: 3, name: 'Sam Green', age: 22, city: 'Chicago' },
        { id: 4, name: 'Anna Brown', age: 40, city: 'Miami' },
        { id: 5, name: 'Peter White', age: 26, city: 'Dallas' },
    ];

    beforeEach(() => {
        wrapper = shallow(<DataTable data={data} columns={columns} />);
    });

    it('DataTableComponent boundary should render without crashing', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('DataTableComponent boundary should render TableFilter, TableHeader, and TableRow components', () => {
        expect(wrapper.find(TableFilter)).toHaveLength(1);
        expect(wrapper.find(TableHeader)).toHaveLength(1);
        expect(wrapper.find(TableRow)).toHaveLength(data.length);
    });

    it('DataTableComponent boundary should render the correct number of columns in TableHeader', () => {
        const tableHeaders = wrapper.find(TableHeader).dive().find('th');
        expect(tableHeaders).toHaveLength(columns.length);
    });

    it('DataTableComponent boundary should render the correct data in each row', () => {
        const tableRows = wrapper.find(TableRow);
        tableRows.forEach((row, index) => {
            const rowData = row.prop('rowData');
            expect(rowData).toEqual(columns.map((column) => data[index][column]));
        });
    });
});
