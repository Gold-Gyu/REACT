import React from 'react';
import homeLogo from '../../../assets/icons/homeIcon/homeBlack.png';
import '../../../styles/layout/ToolBar.scss';
// import homeLogo from '/assets/icons/homeIcon/homeBlack.png'; // 안먹히는 import

function HomeImg({ onClick  } : {onClick: () => void}) {
  // const [imgSrc, setImgSrc] = useState("/src/assets/icons/homeIcon/homeGreen.png");
  // const [isHomeClicked, setIsHomeClicked] = useState<boolean>(true);

  // const clickHome = () => {
  //   const newImgSrc = isHomeClicked
  //     ? "../../../assets/icons/homeIcon/homeBlack.png"
  //     : "../../common/toolbarComp/HomeGreenImg.tsx";
  //   setImgSrc(newImgSrc);
  //   setIsHomeClicked(!isHomeClicked);
  //   console.log(newImgSrc);
	// 	console.log(imgSrc);
		
  // }

  return (
    <div
      className="menuBox"
			onClick={onClick}
      aria-hidden="true"
    >
      <div className="iconBox">
        <img src={homeLogo} alt="home" />
      </div>
      <span>홈</span>
    </div>
  );
}

export default HomeImg;
