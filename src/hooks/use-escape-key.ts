import {useEffect} from "react";

function useEscapeKey({ onEscapeKeyHandler }: { onEscapeKeyHandler: () => void }) {
    useEffect(() => {
        const handleOnKeyDown = (e:KeyboardEvent) => {
            if (e.key === 'Escape') {
                onEscapeKeyHandler();
            }
        };

        document.addEventListener("keydown", handleOnKeyDown);
        return () => {
            console.log("useEscapeKey cleanup");
            document.removeEventListener("keypress", handleOnKeyDown);
        }
    }, [onEscapeKeyHandler]);
}

export default useEscapeKey;