import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './Modal.css';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';


class Modal extends Component {
  shouldComponentUpdate(nextProps) {
    return (nextProps.show !== this.props.show || nextProps.children !== this.props.children);
  }

  render() {
    return (
      <Auxiliary>
        <Backdrop show={this.props.show} />
        <div
          className={classes.Modal}
          style={{
            transform: this.props.show ? 'translateY(-50%)' : 'translateY(-200vh)',
            opacity: this.props.show ? '1' : '0',
          }
        }
        >
          {this.props.children}
        </div>
      </Auxiliary>
    );
  }
}

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
};

export default Modal;
