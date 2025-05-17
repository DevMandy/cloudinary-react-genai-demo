import cld from "./cld.js";
import {scale} from "@cloudinary/url-gen/actions/resize";

export function getOriginalUrl(publicId, width, height) {

  // Scale the image to the specified dimensions
  // and optimize format and quality
  const myImage = cld.image(publicId)
    // .resize(scale().width(width).height(height))
    .format('auto')
    .quality('auto');

  // Return the URL of the image
  return myImage.toURL();
}