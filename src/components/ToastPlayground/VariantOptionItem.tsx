import type {VARIANT_OPTIONS} from "./constants.ts";
import styles from "./ToastPlayground.module.css";

export type VariantOptionType = typeof VARIANT_OPTIONS[number];

interface IVariantOptionItemProps {
  variant: VariantOptionType;
  isChecked: boolean;
  onSelect:() => void;
}

function VariantOptionItem({ variant, isChecked, onSelect } : IVariantOptionItemProps) {
    const variantId = `variant-${variant}`;
    return (
        <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <label key={variantId} htmlFor={variantId}>
                <input
                    id={variantId}
                    type="radio"
                    name="variant"
                    checked={isChecked}
                    value={variant}
                    onChange={onSelect}
                />
                {variant}
            </label>
        </div>
    );
}

export default VariantOptionItem;
