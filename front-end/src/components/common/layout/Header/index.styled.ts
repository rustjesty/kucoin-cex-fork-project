import styled from "styled-components";
import NavDropdown from 'react-bootstrap/NavDropdown';
import { COLORS_CONSTANT } from "../../../../constants/colrs.constant";
const ProfileDropdown = styled(NavDropdown)`
  &.dropdown-menu{
    &.show{

    }
  }
`

const ProfileDropdownFlex = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${COLORS_CONSTANT.secondary};
  /* width: 369px;
  position: absolute;
  left: -300px; */
`

export{
  ProfileDropdown,
  ProfileDropdownFlex
}