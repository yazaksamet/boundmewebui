import axios from "axios";

const apiEndpoint = "https://boundme.herokuapp.com/api/mobile/";

export async function getUserMobileActivities(userId) {
  console.log(userId);
  const activityUrl = apiEndpoint + userId;
  const activities = await axios.get(activityUrl);
  console.log(activities.data);
  return activities.data;
}
