export type LabelType = 'new' | 'upcoming' | 'bestseller' | 'discount';

export type ModelLabel = {
  type: LabelType;
  discount?: number;
};
