import WalletList from 'src/Wallet/WalletList';
import WalletWrite from 'src/Wallet/WalletWrite';

const WalletApp = () => {
  // console.log('cc');
  return (
    <>
      <div>Today</div>
      <WalletList />
      <WalletWrite />
    </>
  );
};

export default WalletApp;
