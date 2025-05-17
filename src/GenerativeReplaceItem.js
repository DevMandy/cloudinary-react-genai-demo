import cld from "./cld.js";
import {generativeReplace} from "@cloudinary/url-gen/actions/effect";

export function getGenerativeReplaceItemUrl(publicId, from, to) {


    const myImage = cld.image(publicId)

    myImage
        .effect(generativeReplace().from(from).to(to)
    );

    console.log("New URL = " + myImage.toURL())
    // Return the URL of the image
    return myImage.toURL();
}

