import React from 'react';


class HideAndSeek extends React.Component {
  constructor(props) {
    super(props);
    this.state = { shown: true };
  }

  handleShowHide = () => {
    this.setState({ shown: !this.state.shown});
  }

  render () {
    return (
      <div className="container">
        <button className="showhideBtn" onClick={this.handleShowHide}>show/hide</button>
        {this.state.shown && <div className="dissapearingBox"></div>}
      </div>
    );
  }
}

export default HideAndSeek;