import React from 'react';
import { shallow } from 'enzyme';
import DashboardPage from '../../components/DashBoardPage';

test('should render DashboardPage correctly', () => {
  const wrapper = shallow(<DashboardPage />);
  expect(wrapper).toMatchSnapshot();
});
