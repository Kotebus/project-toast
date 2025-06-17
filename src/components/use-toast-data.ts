import {useCallback, useState} from "react";
import type {IToastData} from "./ToastPlayground";
import type {VariantOptionType} from "./ToastPlayground/VariantOptionItem.tsx";

export function useToastData() {
    const [data, setData] = useState<IToastData[]>([]);

    const addToast = useCallback(
        ({text, variant}: { text: string, variant: VariantOptionType }) => {
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

    return {data, addToast, removeToast} as const;
}