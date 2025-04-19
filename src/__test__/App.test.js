import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import DataTable from '../components/DataTable';

describe('boundary', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<App />);
    });

    it('AppComponent boundary should render without crashing', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('AppComponent boundary should render a DataTable component', () => {
        expect(wrapper.find(DataTable)).toHaveLength(1);
    });

    it('AppComponent boundary should pass the correct props to DataTable', () => {
        const dataTableProps = wrapper.find(DataTable).props();
        expect(dataTableProps.columns).toEqual(['id', 'name', 'age', 'city']);
        expect(dataTableProps.data).toEqual([
            { id: 1, name: 'John Doe', age: 28, city: 'New York' },
            { id: 2, name: 'Jane Smith', age: 32, city: 'Los Angeles' },
            { id: 3, name: 'Sam Green', age: 22, city: 'Chicago' },
            { id: 4, name: 'Anna Brown', age: 40, city: 'Miami' },
            { id: 5, name: 'Peter White', age: 26, city: 'Dallas' },
        ]);
    });
});
