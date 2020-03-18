import React from 'react';
import {Link} from 'react-router-dom';
import { Jumbotron, Button } from 'reactstrap';
import PropTypes from 'prop-types';

const Jtron = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-4">Welcome to Salesly!</h1>
        <img className="photo" src={require('../images/heroshot.jpg')} alt="headshot1" />
        <p className="lead"></p>
        <hr className="my-2" />
        <p className="lead">
          <Link to='/form'><Button color="primary">Form</Button></Link>
        </p>
      </Jumbotron>
    </div>
  );
};

Jumbotron.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  fluid: PropTypes.bool,
  className: PropTypes.string
};

export default Jtron;