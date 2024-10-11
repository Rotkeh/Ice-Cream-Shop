import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import "../css/DraggableItem.css";
import { DraggableItemProp } from "../interfaces";
import { FlavorItem } from "./FlavorItem";

export function DraggableItem({ item, id }: DraggableItemProp) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <li
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      className="draggable-item"
    >
      <FlavorItem flavor={item.flavor} picked={true} item={item} />
    </li>
  );
}
