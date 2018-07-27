import axios from "axios";
export default {
  gitCommits: function(gitHubCode) {
    return axios.get(`https://api.github.com/repos/${gitHubCode}/commits`);
  }
};
