import React from "react";
import * as Ow from "../apis/Ow";
import SearchBar from "./SearchBar";
import Profile from "./Profile";

class App extends React.Component {
  state = { profileData: null, axiosErrorOccured: false, loading: false };

  componentDidMount() {
    this.onUsernameSubmit("MrBlue#2571", "eu", "pc");
  }

  onUsernameSubmit = (username, region, platform) => {
    this.setState({
      loading: true
    });

    this.loadProfile(username, region, platform);
  };

  loadProfile = async (username, region, platform) => {
    try {
      const response = await Ow.getUserStats(username, region, platform);
      this.setState({
        profileData: response.data,
        errorOccured: false,
        loading: false
      });
    } catch (error) {
      this.setState({
        profileData: null,
        axiosErrorOccured: true,
        loading: false
      });
    }
  };

  render() {
    return (
      <div className="container">
        <SearchBar onUsernameSubmit={this.onUsernameSubmit} />
        <Profile
          profileData={this.state.profileData}
          loading={this.state.loading}
          errorOccured={this.state.axiosErrorOccured}
        />
      </div>
    );
  }
}

export default App;
