import { useNavigate } from 'react-router-dom';

function movePage() {
  const move = useNavigate(); //
  const goPage = (url: string, content?: object | null) => {
    if (url) {
      move(url, { state: content });
    }
  };

  const goBack = () => {
    move(-1);
  };
  // const moveBack =
  return { goPage, goBack };
}

export default movePage;
