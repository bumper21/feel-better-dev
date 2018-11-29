import React from 'react';

class Home extends React.Component {
  render () {
    return (
        <div className="container justify-content">
          <button className="btn btn-success">Feel Better</button><br />
          <button className="btn btn-primary">Watch Better</button> <br />
          <button className="btn btn-warning">Journal Better</button>
        </div>
    )
  }
}

export default Home