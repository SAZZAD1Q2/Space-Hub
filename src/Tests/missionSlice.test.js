import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'jest-fetch-mock';
import { fetchMissions } from '../Redux/Missions/missionSlice';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('missionSlice', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('should fetch missions successfully and update state', async () => {
    const mockMissions = [{ id: 1, name: 'Mission 1' }, { id: 2, name: 'Mission 2' }];

    fetchMock.mockResponseOnce(JSON.stringify(mockMissions));

    const store = mockStore({ missions: { data: null, error: null } });
    await store.dispatch(fetchMissions());

    const actions = store.getActions();

    expect(actions[0].type).toEqual(fetchMissions.pending.type);
    expect(actions[1].type).toEqual(fetchMissions.fulfilled.type);
    expect(store.getState().missions.error).toBeNull();
  });
});
