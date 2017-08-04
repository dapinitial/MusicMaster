import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "profile": {
        "display": "flex",
        "justifyContent": "center"
    },
    "profile-info": {
        "marginLeft": 10,
        "textAlign": "left",
        "display": "flex",
        "flexDirection": "column",
        "justifyContent": "center"
    },
    "profile-img": {
        "width": 150,
        "height": 150,
        "border": "3px solid #111",
        "borderRadius": "50%",
        "objectFit": "cover"
    },
    "profile-name": {
        "fontSize": 26
    },
    "profile-followers": {
        "fontSize": 18
    },
    "profile-genres": {
        "fontSize": 18
    }
});