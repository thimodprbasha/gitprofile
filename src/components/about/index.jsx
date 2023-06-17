import { skeleton } from '../../helpers/utils';
import PropTypes from 'prop-types';

const About = ({ loading, description }) => {
  return (
    <>
      <div className="card shadow-lg compact bg-base-100">
        <div className="card-body">
          <div className="mx-3">
            <h5 className="card-title">
              {loading ? (
                skeleton({ width: 'w-32', height: 'h-8' })
              ) : (
                <span className="text-base-content opacity-70">About</span>
              )}
            </h5>
          </div>
          <div className="p-3 flow-root">
            <div className="mt-3 text-base-content text-opacity-60 font-mono">
              {loading
                ? skeleton({ width: 'w-72', height: 'h-5' })
                : description}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

About.propTypes = {
  loading: PropTypes.bool.isRequired,
  description: PropTypes.string.isRequired,
};

export default About;
