import React from 'react';
import subscribeLogo from '../../../assets/icons/subscribeIcon/subscirbeBlack.png';
import '../../../styles/layout/ToolBar.scss';

function SubscribeImg({ onClick  } : {onClick: () => void}) {
	return (
		<div
      className="menuBox"
			onClick={onClick}
      aria-hidden="true"
    >
			<div className="iconBox">
				<img src={subscribeLogo} alt="구독샵" />
			</div>
			<span>구독샵</span>
		</div>
	);
}

export default SubscribeImg;