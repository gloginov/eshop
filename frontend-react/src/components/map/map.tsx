// import GoogleMapReact from 'google-map-react';
// const AnyReactComponent = ({ text }) => <div>{text}</div>;

const defaultProps = {
  center: {
    lat: 10.99835602,
    lng: 77.01502627
  },
  zoom: 11
};

export default function Map() {

  return (
    <section className="section section-map">
    </section>
  )
}
//
// import {Wrapper} from '@googlemaps/react-wrapper';
// import React from "react";
// const App = () => {
//   return (
//     <Wrapper apiKey={API_KEY}>
//       <Map latitude={0} longitude={0} />
//     </Wrapper>
//   );
// };
//
// const Map = ({latitude, longitude}: {latitude: number; longitude: number}) => {
//   const ref = React.useRef(null);
//   const [map, setMap] = React.useState<google.maps.Map | null>(null);
//
//   React.useEffect(() => {
//     if (ref.current && !map) {
//       setMap(
//         new google.maps.Map(ref.current, {
//           zoomControl: true,
//           mapTypeControl: false,
//           streetViewControl: false,
//           center: {
//             lat: latitude ?? 0,
//             lng: longitude ?? 0,
//           },
//           zoom: 11,
//         })
//       );
//     }
//   }, [ref, map, latitude, longitude]);
//
//   return <div ref={ref} style={{height: '100%', width: '100%'}} />;
// };