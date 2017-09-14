class StoryBox extends React.Component {
  render () {

    const now = new Date();

    const topicsList = ['HTML', 'JavaScript', 'React'];


    return(
      <div>
        <h3>Stories</h3>
        <p className="lead">
          Current Time: {now.toTimeString()}
        </p>
        <ul>
          {topicsList.map( topic => <li>{topic}</li>  )}
        </ul>
      </div>
    );
  }
}

ReactDOM.render (
  <StoryBox />, document.getElementById('story-app')
);



class RobotBox extends React.Component {
  render() {
    return( <div>Robot Box </div> );
  }
}

ReactDOM.render (
  <RobotBox />, document.getElementById('robot-app')
);
