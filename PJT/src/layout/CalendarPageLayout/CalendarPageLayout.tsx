import HeaderLayout from 'layout/common/HeaderLayout/HeaderLayout';
import PageLayout from 'layout/common/PageLayout/PageLayout';
import BodyLayout from '../common/BodyLayout/BodyLayout';
import { ReactNode } from 'react';
import FooterLayout from 'layout/common/FooterLayout/FooterLayout';
import './CalendarPageLayout.css';

function CalendarPageLayout({ children }: { children: ReactNode[] }) {
  return (
    <PageLayout>
      <HeaderLayout>
        <div>Header</div>
        <div>{children[0]}</div>
      </HeaderLayout>
      <BodyLayout>
        <div>Body</div>
        <div className="body-container">
          <div>{children[1]}</div>
        </div>
      </BodyLayout>
      <FooterLayout>
        <div>Footer</div>
        <div>{children[2]}</div>
      </FooterLayout>
    </PageLayout>
  );
}

export default CalendarPageLayout;
