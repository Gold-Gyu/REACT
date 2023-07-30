import React from 'react';
import homeLogo from '../../../assets/icons/homeIcon/homeGreen.png';
import '../../../styles/layout/ToolBar.scss';


function HomeImg() {
//     const [imgSrc, setImgSrc] = useState("/src/assets/icons/homeIcon/Blackhome.jpg");
//     const [isClicked, setIsClicked] = useState<boolean>(false);

    const clickHome = () => {
			console.log("boom");
// 			isClicked ? setImgSrc("/src/assets/icons/homeIcon/homeGreen.png") : setImgSrc("/src/assets/icons/homeIcon/Blackhome.jpg")
// 			isClicked ? setIsClicked(false) : setIsClicked(true)
		}
			
	return (
		<div 
			className="menuBox" 
			onClick={clickHome}
			aria-hidden="true"
			>
			<div className="iconBox">
				<img src={homeLogo} alt="home" />
			</div>
			<span className="GreenToolBar">홈</span>
		</div>
	);
}

export default HomeImg;
