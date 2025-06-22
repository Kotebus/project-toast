import {type PropsWithChildren, useCallback, useEffect, useMemo, useState} from "react";
import {type INewToastData, type IToastData, ToastContext} from "./ToastContext.tsx";

function ToastProvider({children} : PropsWithChildren) {
    const [data, setData] = useState<IToastData[]>([]);

    useEffect(() => {
        const handleOnKeyDown = (e:KeyboardEvent) => {
            if (e.key === 'Escape') {
                setData([]);
            }
        };

        document.addEventListener("keydown", handleOnKeyDown);
        return () => document.removeEventListener("keypress", handleOnKeyDown);
    }, []);

    const addToast = useCallback(
        ({text, variant} : INewToastData) => {
            const newToastDataItem: IToastData = {
                text: text,
                variant: variant,
                id: crypto.randomUUID()
            };
            setData([...data, newToastDataItem]);
        }, [data]);

    const removeToast = useCallback(
        (toastId: string) => {
            const newData = data.filter((item) => item.id !== toastId);
            setData(newData);
        },
        [data]);

    const value = useMemo(
        () => {
            return {data, addToast, removeToast};
        },
        [addToast, data, removeToast]);

    return (
        <ToastContext value={value}>
            {children}
        </ToastContext>
    );
}

export default ToastProvider;