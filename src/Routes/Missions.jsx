import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions, join, leave } from '../Redux/Missions/missionSlice';

const Missions = () => {
  let missionsData = useSelector((state) => state.missions.missions);
  const localMissions = JSON.parse(localStorage.getItem('missions')) || [];
  if (localMissions.length > 0) {
    missionsData = localMissions;
  }
  const dispatch = useDispatch();
  useEffect(() => {
    if (missionsData.length === 0) {
      dispatch(fetchMissions());
    }
  });
  return (

    <div className="container my-5">
      <div className="table-responsive table-sm">

        <table className="table table-bordered text-start table-striped">
          <thead>
            <tr>
              <th scope="col" className="col-lg-1 col-md-1 ">Mission</th>
              <th scope="col" className="col-lg-8 col-md-7">Description</th>
              <th scope="col" className="col-lg-1 col-md-1">Status</th>
              <th scope="col" className="col-lg-2 col-md-3">&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            { missionsData
            && missionsData.map((mission) => (
              <tr key={mission.mission_id}>
                <th scope="row">{mission.mission_name}</th>
                <td>{mission.description}</td>
                <td>
                  { mission.join && (
                    <span className="badge text-bg-info text-light">Active Member</span>
                  )}
                  { !mission.join && <span className="badge text-bg-secondary ">Not A Member</span>}
                </td>
                <td className="text-center">
                  {mission.join && (
                    <button type="button" className="btn btn-outline-danger" onClick={() => dispatch(leave(mission.mission_id))}>Leave Mission</button>
                  ) }
                  { !mission.join && (<button type="button" className="btn btn-outline-secondary" onClick={() => dispatch(join(mission.mission_id))}>Join Mission</button>)}
                </td>
              </tr>
            ))}
            { !missionsData && (
            <div>
              <h3>Loading..</h3>
            </div>
            ) }

          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Missions;
