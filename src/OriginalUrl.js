import cld from "./cld.js";
import {scale} from "@cloudinary/url-gen/actions/resize";

export function getOriginalUrl(publicId) {

  // Scale the image to the specified dimensions
  // and optimize format and quality
  const myImage = cld.image(publicId)
    .format('auto')
    .quality('auto');

  // Return the URL of the image
  return myImage.toURL();
}