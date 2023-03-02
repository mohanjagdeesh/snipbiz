import { useGlobalStore } from "../../store/useGlobalStore";
import "./ResponsiveView.css";

export const ResponsiveView = ({ children }) => {
    const isMobile = useGlobalStore(state => state.isMobile);
    return (
        <div class={isMobile ? "column-view" : "row-view"}>
            {children}
        </div>
    );
}