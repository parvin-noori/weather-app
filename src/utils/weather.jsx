export const getIconUrl = (iconCode) => {
  return `https://developer.accuweather.com/sites/default/files/${String(
    iconCode
  ).padStart(2, "0")}-s.png`;
};
