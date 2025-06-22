import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import styles from './Toast.module.css';
import VisuallyHidden from "../VisuallyHidden";
import type {VariantOptionType} from "../ToastPlayground/VariantOptionItem.tsx";
import type {PropsWithChildren} from "react";

const ICONS_BY_VARIANT = {
  'notice': Info,
  'warning': AlertTriangle,
  'success': CheckCircle,
  'error': AlertOctagon,
};

interface IToastProps extends PropsWithChildren {
    variant: VariantOptionType;
    handleDismiss: () => void;
}

function Toast({children, variant, handleDismiss}: IToastProps) {
    const Icon = ICONS_BY_VARIANT[variant];
    return (
        <div className={`${styles.toast} ${styles[variant]}`}>
            <div className={styles.iconContainer}>
                <Icon size={24}/>
            </div>
            <p className={styles.content}>
                <VisuallyHidden> {variant} -</VisuallyHidden>
                {children}
            </p>
            <button
                className={styles.closeButton}
                onClick={handleDismiss}
                aria-label="Dismiss message"
                aria-live="off"
            >
                <X size={24}/>
            </button>
        </div>
    );
}

export default Toast;
