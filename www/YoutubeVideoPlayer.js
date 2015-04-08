/**
 * Created by alejandrocerro on 4/7/15.
 */

var exec = require('cordova/exec');

/**Declares the empty function*/
function YoutubeVideoPlayer() {}

/**Extends the prototype to include openVideo*/
YoutubeVideoPlayer.prototype.openVideo = function(YTid){
  exec(function (result) {
    console.log(result);
  },function(err){
    console.log("There was an error executing YouTube plugin: ");
    console.error(err);
  },
  "YoutubeVideoPlayer",
  "openVideo",
  [YTid]
  );
};

var YoutubeVideoPlayer = new YoutubeVideoPlayer();
module.exports = YoutubeVideoPlayer;