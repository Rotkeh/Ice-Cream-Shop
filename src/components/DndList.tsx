import {
  closestCorners,
  DndContext,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { PointerSensor, KeyboardSensor, TouchSensor } from "../CustomSensors";
import { useContext } from "react";
import { FlavorContext } from "../context";
import { DraggableItem } from "./DraggableItem";

export function DndList() {
  const { selectedFlavors, updateSelectedFlavors } = useContext(FlavorContext);
  const getTaskPos = (id: number) =>
    selectedFlavors.findIndex((flavor) => flavor.id === id);

  const handleDragEnd = (event: { active: any; over: any }) => {
    const { active, over } = event;
    if (active.id === over.id) return;

    updateSelectedFlavors((flavors: any) => {
      const originalPos = getTaskPos(active.id);
      const newPos = getTaskPos(over.id);

      return arrayMove(flavors, originalPos, newPos);
    });
  };

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );
  return (
    <>
      <DndContext
        sensors={sensors}
        onDragEnd={handleDragEnd}
        collisionDetection={closestCorners}
      >
        <ul>
          <SortableContext
            items={selectedFlavors}
            strategy={verticalListSortingStrategy}
          >
            {selectedFlavors.map((flavor) => (
              <DraggableItem id={flavor.id} key={flavor.id} item={flavor} />
            ))}
          </SortableContext>
        </ul>
      </DndContext>
    </>
  );
}
