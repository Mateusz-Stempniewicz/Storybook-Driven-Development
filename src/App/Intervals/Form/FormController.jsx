import React, { Component, PropTypes } from 'react';

function mapPropsToChildren(children, props) {
  return React.Children.map(children, child => React.cloneElement(child, Object.assign(props, child.props)));
}

class FormController extends Component {
  constructor(props) {
    super(props);
    this.state = {
      intervalName: '',
      startMilestone: '',
      endMilestone: '',
      measurementType: 'milestone',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  }

  childProps() {
    return Object.assign(
      { handleChange: this.handleChange },
      this.state,
    );
  }

  render() {
    const { children } = this.props;
    return (<div>{ mapPropsToChildren(children, this.childProps()) }</div>);
  }
}

FormController.propTypes = {
  children: PropTypes.node,
};

export default FormController;
