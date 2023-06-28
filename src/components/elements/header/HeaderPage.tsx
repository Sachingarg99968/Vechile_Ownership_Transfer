import { FC } from "react";

import { Layout } from "antd";
import Link from "next/link";

import styles from "./HeaderPage.module.css";
import { ChainSelector, ConnectButton } from "..";

import MMW_Logo from "/public/images/MMW_Logo.png";
import MMW_Logo_small from "/public/android-chrome-192x192.png";

import { useWindowWidthAndHeight } from "../../../hooks";

const { Header } = Layout;

const HeaderPage: FC = () => {
    return (
        <Header className={styles.header}>
            <Link href="/">
                <Logo />
            </Link>

            <div className={styles.headerRight}>
                <ChainSelector />
                <ConnectButton />
            </div>
        </Header>
    );
};

export const Logo = () => {
    const { isMobileOnly } = useWindowWidthAndHeight();
    return <h1>Transfer My Car Dapp</h1>;
};

export default HeaderPage;
