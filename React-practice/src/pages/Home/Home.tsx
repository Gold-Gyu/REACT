import HomePageLayout from 'layout/HomePageLayout/HomePageLayout';
import './Home.css';
import viteImg from 'assets/react.svg';
import movePage from 'hooks/common/movePage';
import CalendarPage from 'pages/CalendarPage/CalendarPage';
import ChartPage from 'pages/ChartPage/ChartPage';

function Home() {
  const { goPage } = movePage();
  return (
    <HomePageLayout>
      <div className="home-box">
        <img src={viteImg} alt="" onClick={() => goPage('/calendar')} />
      </div>
      <div className="chart-box" onClick={() => goPage('/Blog')}>Blog</div>
      <div className="calendar-box">Calendar</div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident illo
        quasi repellendus et quia enim, consequatur, tempore nemo, dolore vero
        dolorum expedita delectus non iste voluptatibus cumque temporibus eos
        reiciendis. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Officia ut, amet culpa molestiae rerum, doloremque, quia possimus
        obcaecati alias asperiores a nihil. Placeat vel ab quibusdam dignissimos
        ducimus omnis provident, fugit adipisci molestias perspiciatis maiores
        quis, odio ullam eaque facere dolor laboriosam maxime, pariatur nisi
        enim quo. Odio, fugit. Dolores tempore ipsum recusandae. Magni
        consectetur excepturi perspiciatis ipsum aliquid nostrum porro beatae
        sunt fugiat deserunt natus, voluptates ducimus, id odit vel possimus
        saepe, ullam odio iure aperiam. Quidem recusandae magni nobis aliquam,
        in ad dolor laudantium ullam, odit sint nulla provident harum molestias
        voluptatem odio adipisci enim labore fugit iure.
      </div>
      <CalendarPage />
      <ChartPage />
      <div>Footer입니다.</div>
    </HomePageLayout>
  );
}

export default Home;
