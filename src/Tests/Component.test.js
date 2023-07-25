import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../Redux/Store';
import Missions from '../Components/Missions';
import Rocket from '../Components/Rocket';
import Profile from '../Components/Profile';

describe('Component testing', () => {
  test('Mission component should render correctly', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <Router>
          <Missions />
        </Router>
      </Provider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
  test('Rocket component should render correctly', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <Router>
          <Rocket />
        </Router>
      </Provider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
  test('Profile component should render correctly', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <Router>
          <Profile />
        </Router>
      </Provider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
