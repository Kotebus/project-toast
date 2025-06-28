import { createPortal } from 'react-dom';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import {use} from "react";
import {type IToastData, ToastContext} from "../ToastProvider/ToastContext.tsx";

function ToastShelf() {
    const context = use(ToastContext);
    if (!context) return;

    const {data, removeToast} = context;

    if (!data || data.length === 0) return;

    return createPortal((
        <ol className={styles.wrapper}
            role="region"
            aria-live="polite"
            aria-label="Notification"
        >
            {data.map((item: IToastData) => (
                <li key={item.id} className={styles.toastWrapper}>
                    <Toast
                        variant={item.variant}
                        handleDismiss={() => removeToast(item.id)}
                    >
                        {item.text}
                    </Toast>
                </li>
            ))}
        </ol>
    ), document.querySelector('#toast-shelf-root')!);
}

export default ToastShelf;
