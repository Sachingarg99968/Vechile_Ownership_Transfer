import { FC } from "react";

import { Steps } from "antd";

import styles from "./StepsPane.module.css";
import { useUserData } from "../../../context/UserContextProvider";
import { useWindowWidthAndHeight } from "../../../hooks";

const StepsPane: FC<StepsPaneProps> = ({ tokensToTransfer, NFTsToTransfer }) => {
    const { displayPaneMode } = useUserData();
    const { isMobileOnly, isTablet } = useWindowWidthAndHeight();

    const switchStep = () => {
        switch (displayPaneMode) {
            case "start":
                return -1;
            case "tokens":
                return 0;
            case "nfts":
                return 1;
            case "bundle":
                return 2;
            case "transfer":
                return 3;
            case "done":
                return 4;
            default:
                return 0;
        }
    };

    const tokens = tokensToTransfer.length;
    const nfts = NFTsToTransfer.length;

    const items = [
        {
            title: isTablet ? "Select Vehicles" : "Choose Vehicles to transfer, if any",
            description:
                isTablet && !isMobileOnly
                    ? ""
                    : tokens > 0
                        ? `${tokens} token${tokens > 1 ? "s" : ""} selected`
                        : "Select some of your Vehicles, or all, or none, and click on OK when you're done.",
        },
        {
            title: "Bundle",
            description: isTablet && !isMobileOnly ? "" : "Pack all your vehicles in one group for a single transaction.",
        },
        {
            title: "Transfer",
            description:
                isTablet && !isMobileOnly ? "" : "Your vehicles are ready and waiting for you to approve transfer!",
        },
    ];

    return (
        <div className={styles.steps}>
            <Steps
                direction={isTablet ? "horizontal" : "vertical"}
                current={switchStep()}
                items={items}
                className={styles.stepsContent}
            />
        </div>
    );
};

export default StepsPane;
