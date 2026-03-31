import { SliderItem } from "@/app/types/slider.types";


interface Props {
  item: SliderItem;
}

export default function SliderCard({ item }: Props) {
  return (
    <div className="card">
      <h1>{item.title}</h1>
    </div>
  );
}