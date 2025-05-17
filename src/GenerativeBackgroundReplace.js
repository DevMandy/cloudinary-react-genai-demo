import cld from "./cld.js";
import {generativeBackgroundReplace} from "@cloudinary/url-gen/actions/effect";

export function getGenerativeBackgroundReplaceUrl(publicId, prompt) {


    const myImage = cld.image(publicId)

    myImage
        .effect(generativeBackgroundReplace().prompt(prompt)
    );

    console.log("New URL = " + myImage.toURL())
    // Return the URL of the image
    return myImage.toURL();
}


