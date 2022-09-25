import dynamic from "next/dynamic";
const Map = dynamic(() => import("./Map"), { ssr: false });

const defaultStyle = {
  width: "800px",
  height: "250px",
};

type ShowMapProps = {
  style?: React.CSSProperties;
  icon?: string;
};

const ShowMap = ({ style, icon }: ShowMapProps) => {
  return <Map mapStyle={style ?? defaultStyle} icon={icon} />;
};
export default ShowMap;
