import React from 'react';
import mypageLogo from "../../../assets/icons/mypageIcon/userBlack.png"
import '../../../styles/layout/ToolBar.scss';

function SubscribeImg({ onClick  } : {onClick: () => void}) {
	return (
		<div
      className="myPageBox"
			onClick={onClick}
      aria-hidden="true"
    >
			<div className="iconBox">
				<img src={mypageLogo} alt="마이페이지" />
			</div>
			<span>마이페이지</span>
		</div>
	);
}

export default SubscribeImg;