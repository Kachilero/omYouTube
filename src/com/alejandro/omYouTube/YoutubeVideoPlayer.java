package com.alejandro.omYouTube;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;

import android.content.Intent;
import android.net.Uri;
import org.json.JSONArray;
import org.json.JSONException;

//import com.alejandro.omYouTube.OpenYouTubePlayerActivity;

public class YoutubeVideoPlayer extends CordovaPlugin {
    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        if(action.equals("openVideo")){
          String url = args.getString(0);
            this.openVideo(url, callbackContext);
            return true;
        }
        return false;
    }

    private void openVideo(String vid, CallbackContext callbackContext){

        Intent intent = new Intent(null, Uri.parse("ytv://"+vid), this.cordova.getActivity(), OpenYouTubePlayerActivity.java);
        this.cordova.getActivity().startActivity(intent);
    }
}
