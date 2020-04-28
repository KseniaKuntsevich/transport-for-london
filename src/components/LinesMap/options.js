const featuresLineOpts = {
  type: 'Feature',
  geometry: {
    type: 'LineString',
    properties: {},
    coordinates: [],
  },
};

const pointsOpts = {
  type: 'Feature',
  geometry: {
    type: 'Point',
    coordinates: [],
  },
  properties: {
    title: '',
  },
};

const pointOpts = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [],
      },
    },
  ],
};

export const FEATURES_LINE_GEOJSON = JSON.stringify(featuresLineOpts);
export const POINTS_GEOJSON = JSON.stringify(pointsOpts);
export const POINT_GEOJSON = JSON.stringify(pointOpts);

export const POINT_LAYER = {
  id: 'point',
  type: 'circle',
  source: 'point',
  paint: {
    'circle-radius': 6,
    'circle-color': '#3887be',
  },
};
export const LINE_STRING_LAYER = {
  id: 'LineString',
  type: 'line',
  source: 'LineString',
  layout: {
    'line-join': 'round',
    'line-cap': 'round',
  },
  paint: {
    'line-color': '#3b9194',
    'line-width': 3,
  },
};

export const POINTS_LAYER = {
  id: 'points',
  type: 'symbol',
  source: 'points',
  layout: {
    'text-field': ['get', 'title'],
    'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
    'text-offset': [0, 0.6],
    'text-anchor': 'top',
  },
};
