import React from 'react';
import subscribeLogo from '../../../assets/icons/subscribeIcon/subscribeGreen.png';
import '../../../styles/layout/ToolBar.scss';

function SubscribeImg() {
	return (
		<div className="menuBox">
			<div className="iconBox">
				<img src={subscribeLogo} alt="구독샵" />
			</div>
			<span className='GreenToolBar'>구독샵</span>
		</div>
	);
}

export default SubscribeImg;