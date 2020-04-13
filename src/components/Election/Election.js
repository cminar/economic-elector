import React, { Component } from 'react';
import '../App/App.css';
import { connect } from 'react-redux';

class Election extends Component {
  state = {

  }

  render = () => {
    let election = this.props.election;
    return (
      <div className="Election">
        {election.name}
        <br/>
        {election.date}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    
});

export default connect(mapStateToProps)(Election);