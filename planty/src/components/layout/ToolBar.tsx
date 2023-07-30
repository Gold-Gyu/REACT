import React, { useState } from 'react';
import '../../styles/layout/ToolBar.scss';
import HomeImg from 'components/common/toolbarComp/HomeImg';
import HomeGreenImg from 'components/common/toolbarComp/HomeGreenImg';
import SubscribeImg from 'components/common/toolbarComp/SubscribeImg';
import SubscribeGreenImg from 'components/common/toolbarComp/SubscribeGreenImg';
import EmergencyImg from 'components/common/toolbarComp/EmergencyImg';
import EmergencyGreenImg from 'components/common/toolbarComp/EmergencyImgGreen';
import MypageImg from 'components/common/toolbarComp/MypageImg';
import MypageGreenImg from 'components/common/toolbarComp/MypageGreenImg';

function ToolBar() {
  const [isHomeGreenVisible, setIsHomeGreenVisible] = useState<boolean>(false);
  const [isSubscribGreenVisible, setIsSubscribGreenVisible] = useState<boolean>(false);
  const [isEmergencyGreenVisible, setIsEmergencyGreenVisible] = useState<boolean>(false);
  const [isMyPageGreenVisible, setIsMyPageGreenVisible] = useState<boolean>(false);

  const handleHomeClick = () => {
    setIsHomeGreenVisible(!isHomeGreenVisible);
    setIsSubscribGreenVisible(false);
    setIsEmergencyGreenVisible(false);
    setIsMyPageGreenVisible(false);
  };
  const handleSubscribClick = () => {
    setIsHomeGreenVisible(false);
    setIsSubscribGreenVisible(!isSubscribGreenVisible);
    setIsEmergencyGreenVisible(false);
    setIsMyPageGreenVisible(false);
  };
  const handleEmergencyClick = () => {
    setIsHomeGreenVisible(false);
    setIsSubscribGreenVisible(false);
    setIsEmergencyGreenVisible(!isEmergencyGreenVisible);
    setIsMyPageGreenVisible(false);
  };
  const handleMyPageClick = () => {
    setIsHomeGreenVisible(false);
    setIsSubscribGreenVisible(false);
    setIsEmergencyGreenVisible(false);
    setIsMyPageGreenVisible(!isMyPageGreenVisible);
  };

  return (
    <div className="container">
      <div className="mainBox">
				<div>
        	{isHomeGreenVisible ? <HomeGreenImg /> : <HomeImg onClick={handleHomeClick} />}
				</div>
				<div>
        	{isSubscribGreenVisible ? <SubscribeGreenImg /> : <SubscribeImg onClick={handleSubscribClick} />}
				</div>
				<div>
        	{isEmergencyGreenVisible ? <EmergencyGreenImg /> : <EmergencyImg onClick={handleEmergencyClick} />}
				</div>
				<div>
        	{isMyPageGreenVisible ? <MypageGreenImg /> : <MypageImg onClick={handleMyPageClick} />}
				</div>
      </div>
    </div>
  );
}

export default ToolBar;
