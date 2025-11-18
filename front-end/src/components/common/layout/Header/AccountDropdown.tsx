import styled from "styled-components";
import CustomImage from "../../CustomImage";
import { COLORS_CONSTANT } from "../../../../constants/colrs.constant";
import React, { useRef, useState, useCallback } from "react";
import { FlexBox } from "../../FlexBox";
import CustomText from "../../CustomText";
import { globalFonts } from "../../../../constants/fonts.constant";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../../../hooks";
import useOutsideAlerter from "../../../../hooks/useOutsideAlerter";
import { ACCOUNT_LINKS } from "../../../../constants/links.constants";
import { useDispatch } from "react-redux";
import { updateAccessToken } from "../../../../features/auth/authSlice";
import CopyBox from "../../../box/CopyBox";

const ProfileDropdownFlex = styled.div`
  position: relative;
  z-index: 20;
`;

const ProfileButton = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 100px;
  background: #242329;
  border: 1px #7D7D7D solid;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &.active {
    border: 1px solid #33C4AC;
  }
`;

const DropdownBox = styled.div`
  position: absolute;
  background-color: ${COLORS_CONSTANT.secondary};
  width: 362px;
  padding: 20px;
  border: #55535B 1px solid;
  border-radius: 5px;
  margin-top: 10px;
  left: -300px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const DropDownLink = styled(Link)`
  text-decoration: none;
  font-size: 15px;
  line-height: 30px;
  font-family: ${globalFonts.Poppins};
  color: white;
  font-weight: 400;
  width: 100%;
  padding: 10px;

  display: flex;
  gap: 12px;
  align-items: center;
  &:hover {
    background-color: #2f2d38;
  }
`;

const LogoutButton = styled.button`
  background: none;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  color: white;
  border: white 1px solid;
  width: 100%;
  padding: 10px 0;
  border-radius: 8px;
`;

const AccountDropdown = React.memo(() => {
  const [show, setShow] = useState(false);

  const profile = useAppSelector((state) => state.profile);
  const wrapperRef = useRef(null);
  const dispatch = useDispatch();
  useOutsideAlerter(wrapperRef, useCallback(() => setShow(false), []));

  const logout = useCallback(async () => {
    localStorage.setItem("access_token", "");
    await dispatch(updateAccessToken(""));
    window.location.href = "/";
  }, [dispatch]);

  return (
    <ProfileDropdownFlex ref={wrapperRef}>
      <ProfileButton
        onClick={() => setShow((prevShow) => !prevShow)}
        className={show ? 'active' : ''}
      >
        <CustomImage
          image="/assets/images/icons/header/profile.svg"
          className="profile"
          width='18px'
          height='18px'
          cursor="pointer"
        />
      </ProfileButton>
      {show && (
        <DropdownBox>
          <FlexBox
            borderRadius="8px"
            bgColor="#242327"
            padding="25px"
            direction="column"
            gap="16px"
          >
            <CustomText
              text={profile?.data?.email || ""}
              color="white"
              fontSize="18px"
              fontWeight="600"
              lineHeight="30px"
              fontFamily="Poppins"
            />
            <CopyBox
              text={`UID: ${profile?.data?.customerID || ""}`}
              color="white"
              border="1px solid white"
            />
            <FlexBox height="1px" bgColor="#2E2D31" />
            <FlexBox direction="column" gap="10px">
              <FlexBox justifyContent="space-between">
                <CustomText
                  text="SPOT"
                  fontSize="12px"
                  lineHeight="1.2"
                  fontWeight="500"
                  color="white"
                  fontFamily={globalFonts.Aeroport}
                />
                <FlexBox justifyContent="end" width = "default">
                  <CustomText
                    text="Maker/Taker:"
                    fontSize="12px"
                    lineHeight="1.2"
                    fontWeight="500"
                    color="white"
                    fontFamily={globalFonts.Aeroport}
                  />
                  <CustomText
                    text="0.1%/0.1%"
                    fontSize="14px"
                    lineHeight="1.2"
                    fontWeight="500"
                    color="white"
                    fontFamily={globalFonts.Poppins}
                  />
                </FlexBox>
              </FlexBox>
              <FlexBox justifyContent="space-between">
                <CustomText
                  text="FUTURES"
                  fontSize="12px"
                  lineHeight="1.2"
                  fontWeight="500"
                  color="white"
                  fontFamily={globalFonts.Aeroport}
                />
                <FlexBox justifyContent="end">
                  <CustomText
                    text="Maker/Taker:"
                    fontSize="12px"
                    lineHeight="1.2"
                    fontWeight="500"
                    color="white"
                    fontFamily={globalFonts.Aeroport}
                  />
                  <CustomText
                    text="0.02%/0.06%"
                    fontSize="14px"
                    lineHeight="1.2"
                    fontWeight="500"
                    color="white"
                    fontFamily={globalFonts.Poppins}
                  />
                </FlexBox>
              </FlexBox>
            </FlexBox>
          </FlexBox>
          <FlexBox direction="column" gap="10px">
            {ACCOUNT_LINKS.map((link: ILink, index: number) => (
              <DropDownLink to={link.link} key={index}>
                <CustomImage image={link.headerImage} width="24px" height="24px" />
                <span>{link.text}</span>
              </DropDownLink>
            ))}
          </FlexBox>
          <LogoutButton onClick={logout}>Log Out</LogoutButton>
        </DropdownBox>
      )}
    </ProfileDropdownFlex>
  );
});

export default AccountDropdown;
