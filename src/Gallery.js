import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "Gallery": {},
    "track": {
        "display": "inline-block",
        "width": 220,
        "height": 220,
        "marginTop": 10,
        "marginRight": 10,
        "marginBottom": 10,
        "marginLeft": 10,
        "textAlign": "left",
        "cursor": "pointer",
        "position": "relative"
    },
    "track-img": {
        "width": 220,
        "height": 220,
        "border": "3px solid #111",
        "borderRadius": 3,
        "objectFit": "cover",
        "position": "absolute"
    },
    "track-text": {
        "backgroundColor": "#eee",
        "color": "#111",
        "opacity": 0.75,
        "width": 220,
        "textAlign": "center",
        "position": "absolute",
        "bottom": 0,
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10
    }
});