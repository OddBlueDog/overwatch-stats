import React from "react";

const Profile = props => {
  console.log(props.profileData);

  if (props.loading) {
    return (
      <div class="d-flex justify-content-center">
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  // check if profile data is null or if any errors have occured. API sometimes seem to return status code 200 and an error
  if (!props.profileData || props.profileData.error || props.axiosErrorOccured) return <div>Profile not found</div>;

  const { quickPlayStats, competitiveStats, name, gamesWon, rating, endorsement } = props.profileData;

  return (
    <div class="row">
      <div class="col-md-4">
        <div className="card mb-4 bg-primary">
          <div className="card-header text-white">General</div>
          <ul className="list-group">
            <li className="list-group-item">Name: {name}</li>
            <li className="list-group-item">Games Won: {gamesWon}</li>
            <li className="list-group-item">Current Rank: {rating ? rating : "Unranked"}</li>
            {endorsement && <li className="list-group-item">Endorsement: {endorsement}</li>}
          </ul>
        </div>
      </div>

      {quickPlayStats.awards && (
        <div class="col-md-4">
          <div className="card mb-4 bg-info">
            <div className="card-header text-white">Quick Play Stats</div>
            <ul className="list-group">
              <li className="list-group-item">Cards: {quickPlayStats.awards.cards}</li>
              <li className="list-group-item">Medals: {quickPlayStats.awards.medals}</li>
              <li className="list-group-item">Medals Bronze: {quickPlayStats.awards.medalsBronze}</li>
              <li className="list-group-item">Medals Silver: {quickPlayStats.awards.medalsSilver}</li>
              <li className="list-group-item">Medals Gold: {quickPlayStats.awards.medalsGold}</li>
              <li className="list-group-item">Games won: {quickPlayStats.games.won}</li>
            </ul>
          </div>
        </div>
      )}
      {competitiveStats.awards && (
        <div class="col-md-4">
          <div className="card mb-4 bg-warning">
            <div className="card-header text-white">Competive Play Stats</div>
            <ul className="list-group">
              <li className="list-group-item">Cards: {competitiveStats.awards.cards}</li>
              <li className="list-group-item">Medals: {competitiveStats.awards.medals}</li>
              <li className="list-group-item">Medals Bronze: {competitiveStats.awards.medalsBronze}</li>
              <li className="list-group-item">Medals Silver: {competitiveStats.awards.medalsSilver}</li>
              <li className="list-group-item">Medals Gold: {competitiveStats.awards.medalsGold}</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
