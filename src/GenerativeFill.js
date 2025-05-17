import cld from "./cld.js";
import {minimumPad, pad} from "@cloudinary/url-gen/actions/resize";
import {ar16X9} from "@cloudinary/url-gen/qualifiers/aspectRatio";
import {generativeFill} from "@cloudinary/url-gen/qualifiers/background";
import {compass} from "@cloudinary/url-gen/qualifiers/gravity";

export function getGenerativeFillUrl(publicID, width, height, prompt) {

  const myImage = cld.image(publicID);

  if(prompt){
    myImage.resize(
        pad()
            .height(height)
            .background(generativeFill().prompt(prompt))
    );
  } else {
    // Apply the background removal effect, scale to the specified
    // dimensions and optimize format and quality
    myImage.resize(
        pad()
            .height(height)
            .aspectRatio(ar16X9())
            .gravity(compass("east"))
            .background(generativeFill().prompt(prompt))
    );
  }

  // Return the URL of the image
  return myImage.toURL();
}

export function getGenerativeFillBothDirectionsUrl(publicID, width, height, prompt) {

  const myImage = cld.image(publicID);

  myImage.resize(
      minimumPad()
          .width(1100)
          .height(1100)
          .background(generativeFill())
  );
  // Return the URL of the image
  return myImage.toURL();
}