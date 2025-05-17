import React from "react";
import '../App.css';

import PhotoAlbum from "react-photo-album";
import "react-photo-album/rows.css";
import {getOriginalUrl} from "../OriginalUrl.js";

import {getGenerativeFillUrl} from "../GenerativeFill.js";
import {getGenerativeBackgroundRemoveUrl} from "../GenerativeBackgroundRemove.js";
import {getGenerativeBackgroundReplaceUrl} from "../GenerativeBackgroundReplace.js";
import {getGenerativeRecolorUrl} from "../GenerativeRecolor.jsx";
import {getGenerativeRestoreUrl} from "../GenerativeBackgroundRestore.js";

const PhotoAlbumComponent = (props) => {

    let publicId;
    let photos = [];
    let width = 1920;
    let height = 1280;

    if(props.data.effectOption == "Background Replace"){
        publicId = 'docs/woman-sitting';
            photos.push({src: getOriginalUrl(publicId, width, height), width: width, height: height });
            photos.push({src: getGenerativeBackgroundReplaceUrl(publicId), width: width, height: height, key: publicId + "background_replace"})
    }

    else if(props.data.effectOption == "Background Replace with Prompt"){
        publicId = 'docs/woman-sitting';
        photos.push({src: getOriginalUrl(publicId, width, height), width: width, height: height });
        photos.push({src: getGenerativeBackgroundReplaceUrl(publicId, "a castle"), width: width, height: height, key: publicId + "background_replace_with_prompt"})
    }

    else if(props.data.effectOption == "Replace Transparent Background"){
        publicId = 'docs/motorbike';
        photos.push({src: getOriginalUrl(publicId, width, height), width: width, height: height });
        photos.push({src: getGenerativeBackgroundReplaceUrl(publicId, "a deserted street"), width: width, height: height, key: publicId + "background_replace_with_prompt"})
    }

    else if(props.data.effectOption == "Generative Fill"){
        publicId = 'docs/moped';

        photos.push({src: getOriginalUrl(publicId, 1250, height), width: width, height: height });
        photos.push({
            src: getGenerativeFillUrl(publicId, width, height),
            width: width, height: height, key: publicId + "gen_fill"
        })
    }

    else if(props.data.effectOption == "Generative Fill with Padding"){
        publicId = 'docs/bench-house';

        photos.push({src: getOriginalUrl(publicId, 1250, height), width: width, height: height });
        photos.push({
            src: getGenerativeFillUrl(publicId, width, height),
            width: width, height: height, key: publicId + "gen_fill"
        })
    }

    else if(props.data.effectOption == "Generative Fill Both Directions"){
        publicId = 'docs/gaudi';

        photos.push({src: getOriginalUrl(publicId, 1100, 1100), width: width, height: height });
        photos.push({
            src: getGenerativeFillUrl(publicId, width, height),
            width: width, height: height, key: publicId + "gen_fill"
        })
    }

    else if(props.data.effectOption == "Background Fill with Prompt") {
        publicId = 'docs/play';
        photos.push({src: getOriginalUrl(publicId, width, height), width: width, height: height });
        photos.push({
            src: getGenerativeFillUrl(publicId, width, height, "box of cookies"),
            width: width, height: height, key: publicId + "gen_fill_prompt"
        })
    }

    else if(props.data.effectOption == "Background Remove"){
        publicId = 'docs/dog-with-stick'
        photos.push({src: getOriginalUrl(publicId, width, height), width: width, height: height });
        photos.push({src: getGenerativeBackgroundRemoveUrl(publicId, "the stick"), width: width, height: height, key: publicId + "background_remove"})
    }

    else if(props.data.effectOption == "Generative Recolor"){
        publicId = 'docs/jackets';
        photos.push({src: getOriginalUrl(publicId, width, height), width: width, height: height });
        photos.push({src: getGenerativeRecolorUrl(publicId, "the jacket on the right", "pink"), width: width, height: height, key: publicId + "background_recolor"})
    }

    else if(props.data.effectOption == "Generative Recolor Multiple"){
        publicId = 'docs/devices';
        photos.push({src: getOriginalUrl(publicId, width, height), width: width, height: height });
        photos.push({src: getGenerativeRecolorUrl(publicId, "device", "EA672A", true), width: width, height: height, key: publicId + "background_recolor_multiple"})
    }

    else if(props.data.effectOption == "Generative Restore"){
        console.log("Inside Generative Restore if block")
        publicId = 'docs/old-photo';
        photos.push({src: getOriginalUrl(publicId, width, height), width: width, height: height });
        photos.push({src: getGenerativeRestoreUrl(publicId), width: width, height: height, key: publicId + "generative_restore"})
    }

    return (
      <div className="App-body">
        <PhotoAlbum layout="rows"
            photos={photos}
            justifyContent={"center"}
        />
      </div>
    );
}

export default PhotoAlbumComponent;