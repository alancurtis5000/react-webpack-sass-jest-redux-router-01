import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeText } from '../actions/testPage';
import isEmpty from 'lodash/isEmpty';

class TestPage extends Component {
  constructor(props){
    super(props);
  }

  handleOnClick = () => {
    console.log("handleOnClick");
    this.props.changeText("cheese")
  };
  
  logProps = () => {
    console.log({props:this.props});
    console.log(isEmpty({}))
  }

  render() {
    return (
      <div>
        <h1>React TestPage!</h1>
        <button onClick={this.handleOnClick}>test click</button>
        <button onClick={this.logProps}>log props</button>
      </div>
    )
  }
}

const mapDispatchToProps = {
  changeText
}

function mapStateToProps(state) {
  return {
    redux: state
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestPage);