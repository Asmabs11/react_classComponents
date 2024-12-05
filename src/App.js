
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    // Initializing state
    this.state = {
      person: {
        fullName: 'Michael Jordan',
        bio: 'the greatest basketball player of all time',
        imgSrc: 'https://history-biography.com/wp-content/uploads/2018/06/michael_jordan.jpg', // Example image URL
        profession: 'American businessman and former professional basketball player.',
      },
      shows: false, // State to toggle the profile visibility
      timeElapsed: 0, // Time interval state
    };
    this.timer = null; // Store the timer reference
  }

  // Start the timer when the component mounts
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState((prevState) => ({
        timeElapsed: prevState.timeElapsed + 1,
      }));
    }, 1000); // Update the time every second
  }

  // Clean up the timer when the component unmounts
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  // Toggle the "shows" state to show/hide the profile
  toggleProfile = () => {
    this.setState((prevState) => ({
      shows: !prevState.shows,
    }));
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { shows, timeElapsed } = this.state;

    return (
      <div className="App">
        <h1>Profile Toggle</h1>

        <button onClick={this.toggleProfile}>
          {shows ? 'Hide Profile' : 'Show Profile'}
        </button>

        {shows && (
          <div className="profile">
            <img src={imgSrc} alt="Profile" />
            <h2>{fullName}</h2>
            <p>{bio}</p>
            <p><strong>Profession:</strong> {profession}</p>
          </div>
        )}

        <div className="timer">
          <p>Time since component was mounted: {timeElapsed} seconds</p>
        </div>
      </div>
    );
  }
}

export default App;