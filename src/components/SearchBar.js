import React from "react";

class SearchBar extends React.Component {
  state = { username: "", region: "", platform: "", loading: false };

  onInputChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({ [name]: value });
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onUsernameSubmit(this.state.username, this.state.region, this.state.platform);
  };

  render() {
    return (
      <div>
        <form class="form-inline mb-4 mt-4" onSubmit={this.onFormSubmit}>
          <input
            className="form-control mr-sm-2 my-2"
            type="search"
            placeholder="Overwatch Username"
            value={this.state.username}
            onChange={this.onInputChange}
            aria-label="Search"
            name="username"
          />
          <div className="input-group mr-sm-2 my-2">
            <div className="input-group-prepend">
              <label className="input-group-text" for="inputGroupSelect01">
                Region
              </label>
            </div>
            <select
              className="custom-select"
              id="inputGroupSelect01"
              value={this.state.region}
              onChange={this.onInputChange}
              name="region"
            >
              <option selected>Choose...</option>
              <option value="eu">EU</option>
              <option value="us">US</option>
              <option value="asia">Asia</option>
            </select>
          </div>
          <div className="input-group mr-sm-2 my-2">
            <div className="input-group-prepend">
              <label className="input-group-text" for="inputGroupSelect02">
                Platform
              </label>
            </div>
            <select
              className="custom-select"
              id="inputGroupSelect02"
              value={this.state.platform}
              onChange={this.onInputChange}
              name="platform"
            >
              <option selected>Choose...</option>
              <option value="pc">PC</option>
              <option value="xbox">Xbox</option>
              <option value="ps4">PS4</option>
            </select>
          </div>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
