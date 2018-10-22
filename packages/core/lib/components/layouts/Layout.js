import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { element, oneOfType, arrayOf, object } from 'prop-types';

const Main = ({ children }) => (
  <div>
    <header className="header">
      <Link to={{ pathname: '/' }}>Homepage</Link>
      <Link to={{ pathname: '/subpage' }}>Subpage</Link>
    </header>
    <section>
      <div className="container">
        {children}
      </div>
    </section>
  </div>
);

Main.propTypes = {
  children: oneOfType([arrayOf(element), object]).isRequired,
};

export default connect()(Main);
