import { ReactNode } from 'react';
import './FooterLayout.css';

const FooterLayout = ({ children }: { children: ReactNode }) => {
  return <div className="footer-page-layout">{children}</div>;
};

export default FooterLayout;
