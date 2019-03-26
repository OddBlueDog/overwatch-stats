import axios from "axios";

export async function getUserStats(username, region, platform) {
  username = username.replace("#", "-");
  const profile = `https://ow-api.com/v1/stats/${platform}/${region}/${username}/profile`;
  console.log(profile);
  return await axios.get(profile, {});
}
