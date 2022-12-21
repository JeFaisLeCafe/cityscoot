import { Callout } from "react-native-maps";
import { Location } from "../models";
import { Text } from "react-native";
import styled from "styled-components";
import { colors } from "./colors";

const CardContainer = styled(Callout)`
  width: 200px;
`;
const Title = styled(Text)`
  color: ${colors.primary};
  font-weight: bold;
`;

const Desc = styled(Text)`
    color= ${colors.secondary};
`;

interface Props {
  location: Location;
}
const LocationCard = ({ location }: Props) => {
  return (
    <CardContainer>
      <Title>{location.full_address}</Title>
      <Desc>
        {location.zip} {location.city}
      </Desc>
      <Desc>
        LAT: {location.latitude.toFixed(3)} - LON:{" "}
        {location.longitude.toFixed(3)}
      </Desc>
      <Desc>{location.time_zone}</Desc>
    </CardContainer>
  );
};
export default LocationCard;
