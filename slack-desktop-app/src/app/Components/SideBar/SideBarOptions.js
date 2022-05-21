import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { enterRoom } from "../../../features/appSlice";
import { db } from "../../../firebase";

function SideBarOptions({ Icon, title, addChannelOption, id }) {
  const dispatch = useDispatch();

  const addChannel = () => {
    // const smalltalk = require('smalltalk');
    alert("Channel created");
    // smalltalk.prompt('Channel creation','Please type channel name','test')
    // .then((value) => {
    //     console.log(value);
    // })
    // .catch(() => {
    //     console.log('cancel');
    // });

    // const channelName = prompt('Please enter your channel name','abc') ;
    // if(channelName) {
    db.collection("rooms").add({
      name: "Hai",
    });
    // }
  };

  const selectChannel = () => {
    if (id) {
      dispatch(
        enterRoom({
          roomId: id,
        })
      );
    }
  };

  return (
    <SideBarOptionsContainer
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon fontSize="small" style={{ padding: 10 }} />}
      {Icon ? (
        <h4>{title}</h4>
      ) : (
        <SideBarOptionChannel>
          <span>#</span> {title}
        </SideBarOptionChannel>
      )}
    </SideBarOptionsContainer>
  );
}

export default SideBarOptions;

const SideBarOptionsContainer = styled.div`
  display: flex;
  font-size: 12px;
  align-items: center;
  padding-left: 2px;
  cursor: pointer;

  :hover {
    opacity: 0.9;
    background-color: #340e36;
  }

  > h4 {
    font-weight: 500;
  }

  > h4 > span {
    padding: 15px;
  }
`;

const SideBarOptionChannel = styled.h4`
  padding: 10px 0;
  font-weight: 300;
`;
