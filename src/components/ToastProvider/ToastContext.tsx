import {createContext} from "react";
import type {IToastProvider} from "./ToastProvider.tsx";

export const ToastContext = createContext<IToastProvider | null>(null);