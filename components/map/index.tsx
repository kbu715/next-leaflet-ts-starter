import dynamic from "next/dynamic";
const Map = dynamic(() => import("./Map"), { ssr: false });

const defaultStyle = {
  width: "500px",
  height: "250px",
};

type ShowMapProps = {
  style?: React.CSSProperties;
};

const ShowMap = ({ style }: ShowMapProps) => {
  return <Map mapStyle={style ?? defaultStyle} />;
};
export default ShowMap;
