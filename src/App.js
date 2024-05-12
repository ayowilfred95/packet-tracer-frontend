import React from 'react';
import './App.css';
import Banner from './components/Banner';
import Exhibit from './components/Exhibit';
import AddressDisplay from './components/AddressDisplay';
import PylonConnector from './components/PylonConnector';

const App = () => {
  return (
    <div className="App">
      <Banner
        bannerText="IP-Analyzer"
        bannerText2="Fast & Effective"
        bannerText4="Solution with Fredtech"
        bannerText3="A professional public IP and latency information API"
      />
      <Exhibit name="Public IPv4 Address">
        <AddressDisplay url='https://api.ipify.org?format=json' />
      </Exhibit>
      <Exhibit name="Public IPv6 Address">
        <AddressDisplay url='https://api64.ipify.org?format=json' />
      </Exhibit>
      <Exhibit name="Pylon Packet Latency">
        <PylonConnector />
      </Exhibit>
    </div>
  );
};

export default App;

