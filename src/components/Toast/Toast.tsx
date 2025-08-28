"use client";
import React, { useEffect, useState } from "react";
import { ToastContainer } from "./Toast.styles";

type ToastProps = {
    message: string;
    duration?: number;
    onClose: () => void;
};

const Toast = ({ message, duration = 2000, onClose }: ToastProps) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
            onClose();
        }, duration);

        return () => clearTimeout(timer);
    }, [duration, onClose]);

    if (!visible) return null;

    return <ToastContainer>{message}</ToastContainer>;
};

export default Toast;
