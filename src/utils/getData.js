const getData = (dataURL) =>
  fetch(dataURL)
    .then((response) => response.json())
    .catch((err) => console.log(err));

export default getData;
