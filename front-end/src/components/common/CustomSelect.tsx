import styled from "styled-components";
import Select from 'react-select';

interface ISelectStyle{
  width?: string;
  fontSize?: string;
  height?: string;
}

export const CustomSelect = styled(Select)<ISelectStyle>`
  // select width
  width: ${(props) => props.width || '190px'};
  .css-13cymwt-control{
    // select height
    height: ${(props) => props.height || '40px'} !important;
    .css-hlgwow{
      color: #55535B;

      font-family: Poppins;
      font-size: ${(props) => props.fontSize || '10px'} !important;
      font-style: normal;
      font-weight: 600;
      line-height: 14.327px; /* 143.272% */
      text-transform: uppercase;
      display: flex;
      align-items: center;
    }
    .css-art2ul-ValueContainer2{
      color: #55535B;

      font-family: Poppins;
      font-size: ${(props) => props.fontSize || '10px'}  !important;
      font-style: normal;
      font-weight: 600;
      line-height: 14.327px; /* 143.272% */
      text-transform: uppercase;
    }
    .css-1u9des2-indicatorSeparator{
      display: none;
    }
  }
  
  .css-t3ipsp-control{
    color: #55535B;

    font-family: Poppins;
    font-size: ${(props) => props.fontSize || '10px'};
    font-style: normal;
    font-weight: 600;
    line-height: 14.327px; /* 143.272% */
    text-transform: uppercase;
  }
  .css-1nmdiq5-menu{
    color: var(--text, #18171C);
    /* Web/Body text | 16px | 500 */
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;    
  }
`