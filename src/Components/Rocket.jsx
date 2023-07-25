import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets, reserve, cancel } from '../Redux/Rocket/rocketSlice';

const Rocket = () => {
  const rocketsData = useSelector((state) => state.rockets.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    if (rocketsData.length === 0) {
      dispatch(fetchRockets());
    }
  }, [dispatch, rocketsData]);

  return (
    <div className="container my-3">
      {rocketsData.length === 0 ? (
        <div>
          <h3>Loading</h3>
        </div>
      ) : (
        rocketsData.map((rocket) => (
          <div className="card my-4" key={rocket.id}>
            <div className="card-body">
              <div className="row">
                <div className="col-md-4">
                  <img src={rocket.flickr_images} className="img-fluid" alt={rocket.rocket_name} />
                </div>
                <div className="col-md-8">
                  <h4 className="card-title">{rocket.rocket_name}</h4>
                  <p className="card-text">
                    {rocket.reserved && (
                      <span className="badge bg-info text-light me-2">Reserved</span>
                    )}
                    {rocket.description}
                  </p>
                  {rocket.reserved ? (
                    <button
                      type="button"
                      onClick={() => dispatch(cancel(rocket.id))}
                      className="btn btn-outline-secondary"
                    >
                      Cancel Reservation
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => dispatch(reserve(rocket.id))}
                      className="btn btn-primary"
                    >
                      Reserve Rocket
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Rocket;
