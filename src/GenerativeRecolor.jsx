import cld from "./cld.js";
import {generativeRecolor} from "@cloudinary/url-gen/actions/effect";

export function getGenerativeRecolorUrl(publicId, prompt, toColor, multiple) {

    const myImage = cld.image(publicId)

    if(multiple){
        console.log("mutliple detected")
        myImage
            .effect(
                generativeRecolor(prompt, toColor).detectMultiple()
            );
    }
    else {
        myImage
            .effect(generativeRecolor(prompt, toColor));
    }

    // Return the URL of the image
    console.log("New URL = " + myImage.toURL())
    return myImage.toURL();
}



