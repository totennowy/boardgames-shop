import { LabelType } from '../types/modelLabel';

const useLabel = (type: LabelType, discount?: number, releaseDate?: string) => {
  const date = releaseDate?.slice(0, 10);

  const labelText: Record<LabelType, string> = {
    new: 'new',
    upcoming: releaseDate ? `upcoming ${date}` : '',
    bestseller: 'bestseller',
    discount: discount ? `${discount}%` : '',
  };

  const labelColors: Record<LabelType, string> = {
    new: '#B0C4A7',
    upcoming: '#748CA3',
    bestseller: '#D2B48C',
    discount: '#A03D36',
  };

  const text =
    type === 'discount' && discount !== undefined
      ? `${discount}%`
      : labelText[type];
  const color = labelColors[type];

  return {
    text,
    color,
  };
};

export default useLabel;
