import { ReactNode } from 'react';

function PageLayout({ children }: { children: ReactNode }) {
  return <div className="page-layout">{children}</div>;
}

export default PageLayout;
