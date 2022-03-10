import React, { useEffect } from "react";
import { connect } from "react-redux";
import { WalletsContainer } from "../components/wallets/WalletsContainer";
import { GET_WALLETS_REQUEST } from "../store/reducers/wallets.reducer";

const HomeScreenComponent = ({ wallets, getWallets }) => {
  useEffect(() => {
    getWallets();
  }, [getWallets]);

  return (
      <>
        <WalletsContainer wallets={wallets} />
      </>
  )
};

const mapStateToProps = (state) => ({
    wallets: state.wallets.wallets,
})

const mapDispatchToProps = (dispatch) => ({
    getWallets: () => dispatch({ type: GET_WALLETS_REQUEST }),
})

export const HomeScreen = connect(mapStateToProps, mapDispatchToProps)(HomeScreenComponent)