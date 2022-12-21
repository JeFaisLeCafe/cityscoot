import { Location } from "../models";

const getLocationDescription = (location: Location): string => {
  return location.full_address;
};
export default getLocationDescription;
