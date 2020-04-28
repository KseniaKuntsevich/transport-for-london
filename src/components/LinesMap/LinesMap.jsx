import React from "react";
import mapboxgl from "mapbox-gl";
import { MAPBOX_ACCESS_TOKEN } from "../../constants";
import { LONDON_LATITUDE, LONDON_LONDITUDE } from "../../constants";
import "./LinesMap.scss";

mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;

class LinesMap extends React.Component {
  constructor(props) {
    super(props);
    this.map = null;
    this.geojson = null;
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
    let { map, geojson, mapContainer } = this;
    map = new mapboxgl.Map({
      container: mapContainer,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [LONDON_LONDITUDE, LONDON_LATITUDE],
      zoom: 10,
    });

    if (!lines) {
      return;
    }

    const featuresLine = lines.map((data, i) => ({
      type: "Feature",
      geometry: {
        type: "LineString",
        properties: {},
        coordinates: [].concat(data.lineCoordinates),
      },
    }));

    const featuresPoints = [];
    const featuresPoint = [];
    lines.forEach((data) => {
      const { lineCoordinates, from, to } = data;
      featuresPoints.push({
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: lineCoordinates[0],
        },
        properties: {
          title: from,
        },
      });

      featuresPoints.push({
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: lineCoordinates[lineCoordinates.length - 1],
        },
        properties: {
          title: to,
        },
      });
      featuresPoint.push({
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: lineCoordinates[0],
            },
          },
        ],
      });

      featuresPoint.push({
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: lineCoordinates[lineCoordinates - 1],
            },
          },
        ],
      });
    });

    geojson = {
      type: "FeatureCollection",
    };

    map.on("load", () => {
      map.addSource("point", {
        type: "geojson",
        data: Object.assign(geojson, { features: featuresPoints }),
      });

      map.addLayer({
        id: "point",
        type: "circle",
        source: "point",
        paint: {
          "circle-radius": 6,
          "circle-color": "#3887be",
        },
      });
      map.addSource("LineString", {
        type: "geojson",
        data: Object.assign(geojson, { features: featuresLine }),
      });

      map.addSource("points", {
        type: "geojson",
        data: Object.assign(geojson, { features: featuresPoints }),
      });

      map.addLayer({
        id: "LineString",
        type: "line",
        source: "LineString",
        layout: {
          "line-join": "round",
          "line-cap": "round",
        },
        paint: {
          "line-color": "#3b9194",
          "line-width": 3,
        },
      });

      map.addLayer({
        id: "points",
        type: "symbol",
        source: "points",
        layout: {
          "text-field": ["get", "title"],
          "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
          "text-offset": [0, 0.6],
          "text-anchor": "top",
        },
      });
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
