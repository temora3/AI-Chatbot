    "use client";

    import { CustomButtonProps } from "../types";
    import React from "react";

    const CustomButton = ({
    title,
    containerStyles,
    handleClick,
    btnType,
    children, // added children support
    }: CustomButtonProps & { children?: React.ReactNode }) => {
    return (
        <button
        disabled={false}
        type={btnType || "button"}
        className={`custom-btn flex flex-row justify-center items-center py-2 px-6 outline-none ${containerStyles}`}
        onClick={handleClick}
        >
        {children ? (
            children // render icons or other custom JSX
        ) : (
            <span className="flex-1">{title}</span>
        )}
        </button>
    );
    };

    export default CustomButton;
