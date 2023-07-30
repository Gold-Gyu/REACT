import React from 'react';
import mypageLogo from "../../../assets/icons/mypageIcon/userGreen.png"
import '../../../styles/layout/ToolBar.scss';

function SubscribeImg() {
	return (
		<div className="myPageBox">
			<div className="iconBox">
				<img src={mypageLogo} alt="마이페이지" />
			</div>
			<span className='GreenToolBar'>마이페이지</span>
		</div>
	);
}

export default SubscribeImg;