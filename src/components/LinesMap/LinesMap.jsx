import React from "react";
import mapboxgl from "mapbox-gl";
import { MAPBOX_ACCESS_TOKEN } from "../../constants";
import { LONDON_LATITUDE, LONDON_LONDITUDE } from "../../constants";
import "./LinesMap.scss";
import {
  FEATURES_LINE_GEOJSON,
  POINT_GEOJSON,
  POINTS_GEOJSON,
  POINT_LAYER,
  POINTS_LAYER,
  LINE_STRING_LAYER,
} from "./options";

mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;

class LinesMap extends React.Component {
  constructor(props) {
    super(props);
    this.map = null;
    this.mapContainer = null;
  }

  componentDidMount() {
    this.updateLines();
  }
  componentDidUpdate() {
    this.updateLines();
  }

  updateLines() {
    const { lines } = this.props;
    let { map, mapContainer } = this;
    map = new mapboxgl.Map({
      container: mapContainer,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [LONDON_LONDITUDE, LONDON_LATITUDE],
      zoom: 10,
    });

    if (!lines) {
      return;
    }

    const featuresLine = lines.map((data, i) => {
      const pattern = JSON.parse(FEATURES_LINE_GEOJSON);
      pattern.geometry.coordinates = data.lineCoordinates;
      return pattern;
    });

    const featuresPoints = [];
    const featuresPoint = [];

    lines.forEach((data) => {
      const { lineCoordinates, from, to } = data;
      const patternPoints1 = JSON.parse(POINTS_GEOJSON);
      patternPoints1.geometry.coordinates = lineCoordinates[0];
      patternPoints1.properties.title = from;
      featuresPoints.push(patternPoints1);

      const patternPoints2 = JSON.parse(POINTS_GEOJSON);
      patternPoints2.geometry.coordinates =
        lineCoordinates[lineCoordinates.length - 1];
      patternPoints2.properties.title = to;
      featuresPoints.push(patternPoints2);

      const patternPoint1 = JSON.parse(POINT_GEOJSON);
      patternPoint1.features[0].geometry.coordinates = lineCoordinates[0];
      featuresPoint.push(patternPoint1);

      const patternPoint2 = JSON.parse(POINT_GEOJSON);
      patternPoint2.features[0].geometry.coordinates =
        lineCoordinates[lineCoordinates.length - 1];
      featuresPoint.push(patternPoint2);
    });

    map.on("load", () => {
      map.addSource("point", {
        type: "geojson",
        data: { features: featuresPoints, type: "FeatureCollection" },
      });

      map.addSource("LineString", {
        type: "geojson",
        data: { features: featuresLine, type: "FeatureCollection" },
      });

      map.addSource("points", {
        type: "geojson",
        data: { features: featuresPoints, type: "FeatureCollection" },
      });

      map.addLayer(POINT_LAYER);

      map.addLayer(LINE_STRING_LAYER);

      map.addLayer(POINTS_LAYER);
    });
  }

  render() {
    return (
      <div className="mapParent">
        <div ref={(el) => (this.mapContainer = el)} className="mapContainer" />
      </div>
    );
  }
}

export default LinesMap;
