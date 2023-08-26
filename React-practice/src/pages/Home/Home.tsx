import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div>
      <div className="home-box">Home</div>
      <div className="home-box">
        <Link to="/chart">
          <button type="button">
            <p>차트보러가기</p>
          </button>
        </Link>
        <Link to="/calendar">
          <button type="button">
            <p>달려보러가기</p>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
