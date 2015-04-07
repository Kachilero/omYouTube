/**
 * Created by alejandrocerro on 4/7/15.
 */

var exec = require('cordova/exec');

YoutubeVideoPlayer = {
  openVideo: function(url){
    exec(function(result){
      console.log("VideoPlayer Success Function: " + result);
    }, function(err){
      console.log("VideoPlayer Error Function: " + err);
    }, "YoutubeVideoPlayer",
    "openVideo",
    [YTid]
    );
  }
};

var YoutubeVideoPlayer = new YoutubeVideoPlayer();
module.exports = YoutubeVideoPlayer;