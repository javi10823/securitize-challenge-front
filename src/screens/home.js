import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { ExchangeContainer } from "../components/exchange/ExchangeContainer";
import { AddWalletModal } from "../components/wallets/addWalletModal/AddWalletModal";
import { WalletsContainer } from "../components/wallets/WalletsContainer";
import { getRates, modifyRates } from "../store/actions/exchange.actions";
import {
  createWallet,
  getWallets,
  selectWallet,
  removeWallet,
} from "../store/actions/wallet.actions";

const HomeScreenComponent = ({
  wallets,
  selectedWallet,
  getWallets,
  selectWallet,
  createWallet,
  removeWallet,

  rates,
  getRates,
  modifyRates,
}) => {
  const [showAddWalletModal, setShowAddWalletModal] = useState(false);

  const _handleCreate = (address) => {
    createWallet(address);
    setShowAddWalletModal(false);
  };

  useEffect(() => {
    getWallets();
    getRates();
  }, [getWallets, getRates]);

  useEffect(() => {
    if (wallets?.length > 0) {
      console.log("first wallet", wallets[0]);
      selectWallet(wallets[0].id);
    }
  }, [selectWallet, wallets]);

  return (
    <>
      <WalletsContainer
        wallets={wallets}
        selectWallet={selectWallet}
        selectedWallet={selectedWallet}
        addWallet={() => setShowAddWalletModal(true)}
        removeWallet={removeWallet}
      />

      <ExchangeContainer
        ethBalance={
          wallets.find((wallet) => wallet.id === selectedWallet)?.balance
        }
        rates={rates}
        modifyRates={modifyRates}
      />

      <AddWalletModal
        visible={showAddWalletModal}
        onSubmit={_handleCreate}
        onClose={() => setShowAddWalletModal(false)}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  ...state.wallets,
  ...state.exchange,
});

const mapDispatchToProps = (dispatch) => ({
  getWallets: () => dispatch(getWallets()),
  selectWallet: (id) => dispatch(selectWallet(id)),
  createWallet: (address) => dispatch(createWallet(address)),
  removeWallet: (id) => dispatch(removeWallet(id)),

  getRates: () => dispatch(getRates()),
  modifyRates: (currency, rates) => dispatch(modifyRates(currency, rates)),
});

export const HomeScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreenComponent);
