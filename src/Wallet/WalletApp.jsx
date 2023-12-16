import { useState } from 'react';
import WalletList from 'src/Wallet/WalletList';
import WalletWrite from 'src/Wallet/WalletWrite';

const WalletApp = () => {
  const [contents, setContents] = useState('list');

  return (
    <>
      <div>Today</div>
      <div>
        <button
          onClick={() => {
            setContents('list');
          }}>
          list
        </button>
        <button
          onClick={() => {
            setContents('write');
          }}>
          write
        </button>
      </div>
      {contents === 'list' ? <WalletList /> : <WalletWrite />}
    </>
  );
};

export default WalletApp;
