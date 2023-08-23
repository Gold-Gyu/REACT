import { ReactNode } from 'react';
import './HeaderLayout.css';

function HeaderLayout({ children }: { children: ReactNode }) {
  return <div className="header-layout">{children}</div>;
}

export default HeaderLayout;
