function getRepoContributors(repoOwner, repoName, cb) {
  var request = require("request");
  var GITHUB_TOKEN = '8548dbb8652a4ab3d1538e602d887a4c51f02167';
  var GITHUB_USER = 'waff1e';
  var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';

  var options = {
    url: requestURL,
    headers: {
      'User-Agent': 'request'
    }
  };

  //the way to do with .get the output of request is outstream which is body
  // but we are not working with any files so doing it this way where entire body that was send out
  //is in a variable
  request(options, function(error, response, body) {
    if (error)
      throw error;

    //parsed working with json
    var objects = JSON.parse(body);
    cb(error,objects);


  });
}


getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  for (let i = 0; i < result.length-1; i++)
  {
    console.log(result[i].avatar_url);
  }
});