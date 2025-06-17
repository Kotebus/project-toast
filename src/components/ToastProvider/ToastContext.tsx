import {createContext} from "react";
import type {VariantOptionType} from "../ToastPlayground/VariantOptionItem.tsx";

export interface IToastData {
    text: string;
    variant: VariantOptionType;
    id: string;
}

export interface INewToastData {
    text: string;
    variant: VariantOptionType;
}

interface IToastProvider {
    data: IToastData[];
    addToast: ({text, variant} : INewToastData) => void;
    removeToast: (toastId: string) => void;
}
export const ToastContext = createContext<IToastProvider | null>(null);