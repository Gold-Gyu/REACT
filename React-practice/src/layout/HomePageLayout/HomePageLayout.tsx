import { ReactNode } from 'react';
import PageLayout from 'layout/PageLayout/PageLayout';
import './HomePageLayout.css';

const HomePageLayout = ({ children }: { children: ReactNode[] }) => {
  return (
    <PageLayout>
      <div id="header">
        <div className="header-right-box">{children[0]}</div>
        <div className="header-left-box">
          {children[1]}
          {children[2]}
        </div>
      </div>
      <div id="body">
        <div className="body">{children[3]}</div>
        <div className="sidebar">
          {children[4]}
          {children[5]}
        </div>
      </div>
      <div id="footer">
        <div>footer</div>
      </div>
    </PageLayout>
  );
};

export default HomePageLayout;
