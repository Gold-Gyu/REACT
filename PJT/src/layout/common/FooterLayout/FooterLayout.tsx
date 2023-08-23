import { ReactNode } from 'react';

const FooterLayout = ({ children }: { children: ReactNode }) => {
  return <div className="footer-page-layout">{children}</div>;
};

export default FooterLayout;
