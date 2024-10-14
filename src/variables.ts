export const data = "/data.json";
let customIceCreamId = 0;
export const getCustomIceCreamId = () => {
  return customIceCreamId++;
};
