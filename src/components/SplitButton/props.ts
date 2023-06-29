export type OptionItemsProps = {
  onItemClick: (value: string | number | Object) => void;
  label: string;
  value: string | number | Object;
};

export type SplitButtonProps = {
  className?: string;
  disabled?: boolean;
  primaryLabel: string;
  optionItems: OptionItemsProps[];
  onClickPrimary?: () => void;
};
