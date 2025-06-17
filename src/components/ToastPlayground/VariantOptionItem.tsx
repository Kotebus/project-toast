import type {VARIANT_OPTIONS} from "./constants.ts";

export type VariantOptionType = typeof VARIANT_OPTIONS[number];

interface IVariantOptionItemProps {
  variant: VariantOptionType;
  isChecked: boolean;
  onSelect:() => void;
}

function VariantOptionItem({ variant, isChecked, onSelect } : IVariantOptionItemProps) {
  const variantId = `variant-${variant}`;
  return (
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
  );
}

export default VariantOptionItem;
