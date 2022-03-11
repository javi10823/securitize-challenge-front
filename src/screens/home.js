import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ExchangeContainer } from "../components/exchange/ExchangeContainer";
import { AddWalletModal } from "../components/wallets/addWalletModal/AddWalletModal";
import { WalletsContainer } from "../components/wallets/WalletsContainer";
import { getRates, modifyRates } from "../store/actions/exchange.actions";
import {
  createWallet,
  getWallets,
  selectWallet,
} from "../store/actions/wallet.actions";

export const HomeScreen = () => {
  const dispatch = useDispatch();
  const { wallets, selectedWallet } = useSelector((state) => state.wallets);
  const { rates } = useSelector((state) => state.exchange)
  const [showAddWalletModal, setShowAddWalletModal] = useState(false);

  const _handleCreate = (address) => {
    dispatch(createWallet(address));
    setShowAddWalletModal(false);
  };

  useEffect(() => {
    dispatch(getWallets());
    dispatch(getRates());
  }, [dispatch]);

  useEffect(() => {
    if (wallets?.length > 0) {
      dispatch(selectWallet(wallets[0].id));
    }
  }, [dispatch, wallets]);

  return (
    <>
      <WalletsContainer
        wallets={wallets}
        addWallet={() => setShowAddWalletModal(true)}
      />

      <ExchangeContainer
        ethBalance={
          wallets.find((wallet) => wallet.id === selectedWallet)?.balance
        }
        rates={rates}
        modifyRates={(currency, rates) => dispatch(modifyRates(currency, rates))}
      />

      <AddWalletModal
        visible={showAddWalletModal}
        onSubmit={_handleCreate}
        onClose={() => setShowAddWalletModal(false)}
      />
    </>
  );
};