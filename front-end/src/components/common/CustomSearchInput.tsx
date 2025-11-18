import React, { ChangeEvent } from 'react';
import styled from 'styled-components';
import { globalFonts } from '../../constants/fonts.constant';

interface CustomSearchInputType {
  placeholder?: string;
  bgColor?: string;
  input?: any;
  setInput?: any;
  maxWidth?: string;
  height?: string;
  bgPosition?: string;
  color?: string;
  boxShadow?: string;
  // borderLeft?: string;
}

const SearchInputStyle = styled.input<CustomSearchInputType>`
  width: 100%;
  max-width: ${(props) => props.maxWidth ? props.maxWidth : '440px'};
  height: ${(props) => props.height ? props.height : '40px'};
  box-sizing: border-box !important;
  border: 1px solid rgba(208, 208, 208, 0.50);
  background: ${(props) => props.bgColor || 'white'};
  box-shadow: ${(props) => props.boxShadow};
  border-radius: 8px;
  font-family: ${globalFonts.Roboto};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => props.color || '#55535B'};
  padding: 14px 16px 14px 40px;
  background-image: url('/assets/images/icons/search.svg');
  background-position:  ${(props) => props.bgPosition ? props.bgPosition : '8px 8px'};
  background-size: 24px 24px;
  background-repeat: no-repeat;
  ::placeholder {
    color: #55535B;
  }
  &:focus {
    border: #45EFD2 1px solid;
    outline: none;
  }

  @media screen and (max-width: 550px) {
    height: 42px;
    font-size: 16px;
    line-height: 24px;
    background-size: 22px 22px;
    padding: 12px 12px 12px 48px !important;
    background-position: 14px 11px;
  }
`;

const CustomSearchInput: React.FC<CustomSearchInputType> = ({
  placeholder,
  bgColor,
  setInput,
  input,
  maxWidth,
  height,
  bgPosition,
  color,
  boxShadow,
  // borderLeft
}) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const colorMode: string = "light";

  return (
    <SearchInputStyle
      type="text"
      placeholder={placeholder || 'Search'}
      onChange={handleInputChange}
      value={input}
      bgColor={bgColor ? bgColor : (colorMode === 'light' ? '#f3f3f3' : '#4f4f4f')}
      color={color ? color : (colorMode === 'light' ? '#9e9e9e' : '#b6b6b6')}
      maxWidth={maxWidth}
      height={height}
      bgPosition={bgPosition}
      autoFocus
      boxShadow={boxShadow}
    // borderLeft={borderLeft}
    />
  );
};

export default CustomSearchInput;
