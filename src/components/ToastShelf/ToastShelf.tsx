import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import type {IToastData} from "../ToastPlayground";

interface IToastShelfProps {
    toastsData: IToastData[];
    removeToast: (toastId: string) => void;
}

function ToastShelf({toastsData, removeToast}: IToastShelfProps) {
    if (!toastsData || toastsData.length === 0) return;

    return (
        <ol className={styles.wrapper}>
            {toastsData.map((item: IToastData) => (
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
    );
}

export default ToastShelf;
