const getLondonDateyyyyMMdd = () =>
  new Date()
    .toLocaleString("en-GB", {
      timeZone: "Europe/London",
      year: "numeric",
      month: "numeric",
      day: "numeric",
    })
    .split("/")
    .reverse()
    .join("");

export default getLondonDateyyyyMMdd;
