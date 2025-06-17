import Button from '../Button';

import styles from './ToastPlayground.module.css';
import VariantOptionItem, {type VariantOptionType} from "./VariantOptionItem.tsx";
import {VARIANT_OPTIONS} from "./constants.ts";
import {useState, type FormEvent} from "react";
import Toast from "../Toast";

function ToastPlayground() {
  const [selectedVariant, setSelectedVariant] = useState<VariantOptionType>(VARIANT_OPTIONS[0]);
  const [text, setText] = useState('');
  const [isToastOpen, setIsToastOpen] = useState(false);

  const submitToast = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //window.alert(`${selectedVariant}: ${text}`);
    setIsToastOpen(true);
    //setText('');
  };

  return (
      <form onSubmit={submitToast}>
        <div className={styles.wrapper}>
          <header>
            <img alt="Cute toast mascot" src="/assets/toast.png" />
            <h1>Toast Playground</h1>
          </header>

          { isToastOpen && (
          <Toast
              variant={selectedVariant}
              handleDismiss={() => setIsToastOpen(false)}
          >
            {text}
          </Toast>)}

          <div className={styles.controlsWrapper}>
            <div className={styles.row}>
              <label
                htmlFor="message"
                className={styles.label}
                style={{ alignSelf: 'baseline' }}
              >
                Message
              </label>
              <div className={styles.inputWrapper}>
                <textarea
                    id="message"
                    className={styles.messageInput}
                    value={text}
                    required={true}
                    onChange={(e) => setText(e.target.value)}
                />
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.label}>Variant</div>
              <div
                className={`${styles.inputWrapper} ${styles.radioWrapper}`}
              >
                { VARIANT_OPTIONS.map(variant =>
                    <VariantOptionItem
                        key={variant}
                        variant={variant}
                        isChecked={variant === selectedVariant}
                        onSelect={() => setSelectedVariant(variant)}
                    />) }
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.label} />
              <div
                className={`${styles.inputWrapper} ${styles.radioWrapper}`}
              >
                <Button>Pop Toast!</Button>
              </div>
            </div>
          </div>
        </div>
      </form>
  );
}

export default ToastPlayground;
