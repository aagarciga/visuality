// import chroma from "chroma-js";
const chroma = require("chroma-js");

const scale = (color) => {
  // const tints = chroma.scale([color, "#fff"]).mode("lch").colors(6).reverse();
  // const shades = chroma.scale([color, "#000"]).mode("lch").colors(7);
  // const scale = tints.slice(1).concat(shades.slice(1, -1));
  // const tint = chroma(color).brighten(3);
  // const shade = chroma(color).darken(3);
  const scale = chroma.scale(color).colors(10);

  return scale;
};

const colors = [
  ["F2F2F3", "#959A9D", "191A1A"], // Grey
  ["E7F5FD", "#006EC7", "031F30"], // Blue
  ["E7EAFD", "#4156F1", "030930"], // Indigo
  ["F0E7FD", "#8441F1", "140330"], // Violet
  ["FBE7FD", "#DC41F1", "2A0330"], // Purple
  ["FDE7F5", "#F141AE", "30031F"], // Pink
  ["FDE7EA", "#F14156", "300309"], // Red
  ["FDF0E7", "#ED6E00", "301403"], // Orange
  ["FDFBE7", "#FFF212", "302A03"], // Yellow
  ["F5FDE7", "#AEF141", "1F3003"], // Lime
  ["EAFDE7", "#56F141", "093003"], // Green
  ["E7FDF0", "#41F184", "033014"], // Teal
  ["E7FDFB", "#41F1DC", "03302A"], // Cyan
];

colors.forEach((color) => console.log(color, scale(color)));
