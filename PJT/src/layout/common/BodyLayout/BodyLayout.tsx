import { ReactNode } from "react";
import './BodyLayout.css';

function BodyLayout({ children }: { children: ReactNode}) {
  return <div className="Body-layout-container">{children}</div>;
}

export default BodyLayout;
