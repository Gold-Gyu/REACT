import React from 'react';
import emergencyLogo from "../../../assets/icons/emergencyIcon/emergencyBlack.png"
import '../../../styles/layout/ToolBar.scss';

function SubscribeImg({ onClick  } : {onClick: () => void}) {
	return (
		<div
      className="menuBox"
			onClick={onClick}
      aria-hidden="true"
    >
			<div className="iconBox">
				<img src={emergencyLogo} alt="응급" />
			</div>
			<span>응급실</span>
		</div>
	);
}

export default SubscribeImg;