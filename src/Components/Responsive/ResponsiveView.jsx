import { useGlobalStore } from "../../store/useGlobalStore";
import "./ResponsiveView.css";

const ResponsiveView = ({ children }) => {
  const isMobile = useGlobalStore((state) => state.isMobile);
  return <div data-testid="wrapper" className={isMobile ? "column-view" : "row-view"}>{children}</div>;
};

export default ResponsiveView;
