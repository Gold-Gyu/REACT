import React from 'react';
import emergencyLogo from "../../../assets/icons/emergencyIcon/emergencyGreen.png"
import '../../../styles/layout/ToolBar.scss';

function SubscribeImg() {
	return (
		<div className="menuBox">
			<div className="iconBox">
				<img src={emergencyLogo} alt="응급" />
			</div>
			<span className='GreenToolBar'>응급실</span>
		</div>
	);
}

export default SubscribeImg;