import React, { useState, useEffect } from "react";

export const LoadingComponent = () => {
    const [loadingText, setLoadingText] = useState("loading");

    useEffect(() => {
        const intervalId = setInterval(() => {
            setLoadingText(prevText => {
                if (prevText === "loading") {
                    return "loading.";
                } else if (prevText === "loading.") {
                    return "loading..";
                } else if (prevText === "loading..") {
                    return "loading...";
                } else {
                    return "loading";
                }
            });
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return <span>{loadingText}</span>;
};

