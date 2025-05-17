import cld from "./cld.js";
import {generativeRestore} from "@cloudinary/url-gen/actions/effect";
import {improve} from "@cloudinary/url-gen/actions/adjust";

export function getGenerativeRestoreUrl(publicId, from, to) {


    const myImage = cld.image(publicId)

    myImage
        .effect(generativeRestore()).adjust(
        improve()
            .mode("indoor")
            .blend(40)
    );

    // Return the URL of the image
    return myImage.toURL();
}

