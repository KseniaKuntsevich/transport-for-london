const getLondonTimeHHmm = () =>
  new Date()
    .toLocaleString("en-GB", {
      timeZone: "Europe/London",
      hour: "numeric",
      minute: "numeric",
    })
    .split(":")
    .join("");

export default getLondonTimeHHmm;
