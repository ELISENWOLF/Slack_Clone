import './header.css'
import React from "react";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase";

function Header() {
  const [user] = useAuthState(auth);
  // console.log("user is", user);
  return (
    <HeaderContainer>
      {/* Header left */}
      <HeaderLeft className='left'>
        <HeaderAvatar
          alt={user?.displayName}
          src={user?.photoURL}
        />
        <h5 onClick={() => auth.signOut()}>Logout</h5>
      </HeaderLeft>

      {/* Header right */}
      <HeaderSearch className='search'>
        <SearchIcon />
        <input placeholder="Search" className='input'/>
      </HeaderSearch>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  background-color: var(--slack-color);
  color: white;
`;

const HeaderSearch = styled.div`
  display: flex;
  flex: 0.4;
  opacity: 1;
  border-radius: 6px;
  background-color: #421f44;
  text-align: center;
  padding: 0 50px;
  color: gray;
  border: 1px gray solid;

  > input {
    background-color: transparent;
    border: none;
    text-align: center;
    min-width: 30vw;
    outline: none;
    color: white;
  }
`;

const HeaderLeft = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  margin-left: 20px;

  > h5 {
    margin-left: 10px;
  }
`;

const HeaderAvatar = styled(Avatar)`
 
`;
