import Home from './Home.jsx';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

export default compose(
  withRouter,
)(Home);