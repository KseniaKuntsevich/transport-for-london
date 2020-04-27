import React from "react";
import mapboxgl from "mapbox-gl";
import { MAPBOX_ACCESS_TOKEN } from "../../constants";

import "./Map.scss";

mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;

class Map extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // const map = new mapboxgl.Map({
    //   container: this.mapContainer,
    //   style: "mapbox://styles/mapbox/streets-v11",
    //   center: [this.props.lng, this.props.lat],
    //   zoom: this.props.zoom,
    // });
  }

  render() {
    return <div></div>;
  }
}

export default Map;
//<div ref={(el) => (this.mapContainer = el)} className="mapContainer"/>
