import { BackgroundLight, ButtonHover, Yellow } from '../colors';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@material-ui/core';
import React, { Dispatch, SetStateAction } from 'react';

import { Network } from '../types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 380px;
  width: 420px;
  background: rgba(27, 38, 44, 0.95);
  border-radius: 20px;
  align-items: center;
  background: ${BackgroundLight};
  margin: auto;
  margin-top: 150px;
`;

const Header = styled.div`
  font-size: 36px;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const Submit = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${Yellow};
  width: 100px;
  height: 50px;
  border-radius: 10px;
  color: Black;
  margin-top: 35px;

  transition: 250ms background-color ease;
  cursor: pointer;

  &:hover {
    background-color: ${ButtonHover};
  }
`;


type NetworkPickerProps = {
  handleCloseNetworkModal: () => void,
  setNetwork: Dispatch<SetStateAction<Network>>,
  network: Network,
}

export const NetworkPicker = (props: NetworkPickerProps) => {

  const closePicker = () => {
    props.handleCloseNetworkModal();
  }

  const networkChanged = (selected: React.ChangeEvent<HTMLInputElement>) => {
    props.setNetwork(selected.target.value as Network);
  }

  return (
    <Container>
      <Header>Network</Header>
      {/* TODO: come up with a better way to pass selection back */}
      <FormControl component="fieldset">
        <RadioGroup aria-label="gender" name="gender1" value={props.network} onChange={networkChanged}>
          <FormControlLabel value={Network.PRATER} control={<Radio />} label={Network.PRATER} />
          <FormControlLabel value={Network.PYRMONT} control={<Radio />} label={Network.PYRMONT} />
          <FormControlLabel value={Network.MAINNET} disabled control={<Radio />} label={Network.MAINNET} />
        </RadioGroup>
      </FormControl>
      <Submit onClick={closePicker}>OK</Submit>
    </Container>
  )
}