"use client";
import React, {useState} from "react";
import { Gif } from "@/types/Gif";
import {
    Overlay,
    ModalContent,
    GifImage,
    ButtonGroup,
    ActionButton,
    CloseButton,
} from "./GifModal.styles";
import Toast from "@/components/Toast/Toast";

type GifModalProps = {
    gif: Gif | null;
    onClose: () => void;
};

const GifModal = ({ gif, onClose }: GifModalProps) => {
    if (!gif) return null;

    const [toast, setToast] = useState<string | null>(null);

    const handleCopy = async () => {
        if (gif.media_formats.gif?.url) {
            await navigator.clipboard.writeText(gif.media_formats.gif.url);
            setToast("Link copied!");
        }
    };

    const handleDownload = async () => {
        if (gif.media_formats.gif?.url) {
            try {
                const response = await fetch(gif.media_formats.gif.url);
                const blob = await response.blob();
                const url = window.URL.createObjectURL(blob);

                const link = document.createElement("a");
                link.href = url;
                link.download = `${gif.id}.gif`; // форсоване скачування
                document.body.appendChild(link);
                link.click();

                document.body.removeChild(link);
                window.URL.revokeObjectURL(url);
            } catch (err) {
                console.error("Download failed:", err);
            }
        }
    };

    return (
        <Overlay onClick={onClose}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                <CloseButton onClick={onClose}>×</CloseButton>
                <GifImage
                    src={gif.media_formats.gif?.url}
                    alt={gif.content_description}
                />
                <ButtonGroup>
                    <ActionButton onClick={handleDownload}>Download</ActionButton>
                    <ActionButton onClick={handleCopy}>Copy Link</ActionButton>
                </ButtonGroup>
            </ModalContent>

            {toast && <Toast message={toast} onClose={() => setToast(null)} />}
        </Overlay>
    );
};

export default GifModal;
