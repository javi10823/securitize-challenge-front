import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ExchangeContainer } from "../components/exchange";
import { AddWalletModal } from "../components/wallets/addWalletModal";
import { WalletsContainer } from "../components/wallets";
import {
  getRates,
  modifyRates,
  createWallet,
  getWallets,
  selectWallet,
} from "../store/actions";
import { useAppSelector } from "../hooks";

export const HomeScreen = () => {
  const dispatch = useDispatch();
  const { wallets, selectedWallet } = useAppSelector(({ wallets }) => wallets);
  const { rates } = useAppSelector(({ exchange }) => exchange);
  const [showAddWalletModal, setShowAddWalletModal] = useState(false);

  const _handleCreate = (address: string) => {
    dispatch(createWallet(address));
    setShowAddWalletModal(false);
  };

  useEffect(() => {
    dispatch(getWallets());
    dispatch(getRates());
  }, [dispatch]);

  useEffect(() => {
    if (wallets?.length > 0 && selectedWallet === null) {
      dispatch(selectWallet(wallets[0].id));
    }
  }, [dispatch, wallets, selectedWallet]);

  return (
    <>
      <WalletsContainer addWallet={setShowAddWalletModal.bind(null, true)} />
      <ExchangeContainer
        ethBalance={wallets.find(({ id }) => id === selectedWallet)?.balance}
        rates={rates}
        modifyRates={(currency: string, rates: string) =>
          dispatch(modifyRates(currency, rates))
        }
      />
      <AddWalletModal
        visible={showAddWalletModal}
        onSubmit={_handleCreate}
        onClose={setShowAddWalletModal.bind(null, false)}
      />
    </>
  );
};
