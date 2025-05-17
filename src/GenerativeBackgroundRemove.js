import cld from "./cld.js";
import {generativeRemove} from "@cloudinary/url-gen/actions/effect";

export function getGenerativeBackgroundRemoveUrl(publicId, prompt) {

  const myImage = cld.image(publicId)

    myImage
        .effect(generativeRemove().prompt(prompt));

  // Return the URL of the image
  return myImage.toURL();
}

