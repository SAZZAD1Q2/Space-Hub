import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'jest-fetch-mock';
import { fetchRockets } from '../Redux/Rocket/rocketSlice';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('RocketSlice', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('should fetch Rockets successfully and update state', async () => {
    const mockRockets = [{ id: 1, name: 'Rocket 1' }, { id: 2, name: 'Rocket 2' }];

    fetchMock.mockResponseOnce(JSON.stringify(mockRockets));

    const store = mockStore({ Rockets: { data: null, error: null } });
    await store.dispatch(fetchRockets());

    const actions = store.getActions();

    expect(actions[0].type).toEqual(fetchRockets.pending.type);
    expect(actions[1].type).toEqual(fetchRockets.fulfilled.type);
    expect(store.getState().Rockets.error).toBeNull();
  });
});
