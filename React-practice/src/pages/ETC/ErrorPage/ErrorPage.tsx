import { Link } from 'react-router-dom';
const ErrorPage = () => {
  return (
    <div>
      <div>Error</div>
      <div>없는 페이지 입니다.</div>
      <Link to="/home"> 홈으로 가기 </Link>
    </div>
  );
};

export default ErrorPage;
