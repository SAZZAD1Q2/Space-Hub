import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions } from '../Redux/Missions/missionSlice';

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
      <div className="table-responsive table-sm" />
    </div>
  );
};
export default Missions;
