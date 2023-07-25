import { useSelector } from 'react-redux';

const Profile = () => {
  const allMissions = useSelector((state) => state.missions.missions);
  const myMissions = allMissions.filter((mission) => mission.join === true);
  return (
    <div className="container py-2">
      <div className="row py-5">
        <div className="col-6">
          <h4>My Missions</h4>
          <ul className="list-group ">
            {myMissions.length > 0 ? (myMissions.map((mission) => (
              <li className="list-group-item d-flex justify-content-between align-items-center" key={mission.mission_id}>
                <div>
                  <p className="m-0">{mission.mission_name}</p>
                </div>
              </li>
            )))
              : (<li className="list-group-item">No missions</li>)}
          </ul>
        </div>
        <div className="col-6">
          <h4>My Rockets</h4>
          <ul className="list-group">
            <li className="list-group-item">
              No rockets
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Profile;
