import type { ComponentProps } from "hexo-renderer-react-styled";
import { WanghuConfig } from "../../_config";

declare global {
  interface HexoComponentProps extends ComponentProps {
    theme: ComponentProps["theme"] & WanghuConfig;
  }
}
