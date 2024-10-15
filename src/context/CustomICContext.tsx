import { createContext, ReactNode, useState } from "react";
import { Flavor, IDraggableItem, IFlavorsContext } from "../interfaces";
import { IceCreamContainer } from "../enums";

interface IFlavorProviderProps {
  children: ReactNode;
}

export const FlavorContext = createContext<IFlavorsContext>(
  {} as IFlavorsContext
);

export function FlavorProvider({ children }: IFlavorProviderProps) {
  const [selectedFlavors, setSelectedFlavors] = useState<IDraggableItem[]>([]);

  const addFlavor = (flavor: Flavor) => {
    if (selectedFlavors.length > 0) {
      let temp = Array.from(selectedFlavors);
      let index = getFirstEmptyIndex(temp);
      temp[index].flavor = flavor;
      setSelectedFlavors(temp);
    }
  };

  const updateSelectedFlavors = (flavors: any) => {
    setSelectedFlavors(flavors);
  };

  const removeFlavor = (item: IDraggableItem) => {
    let temp = Array.from(selectedFlavors);
    const index = temp.indexOf(item);
    temp[index].flavor = null;
    setSelectedFlavors(temp);
  };

  function getFirstEmptyIndex(arr: IDraggableItem[]) {
    for (let i = arr.length - 1; i >= 0; i--) {
      if (!arr[i].flavor) return i;
    }
    return 0;
  }

  const resetFlavors = (option: string) => {
    let emptyFlavors: IDraggableItem[] = [];
    for (
      let i = 1;
      i <= IceCreamContainer[option as keyof typeof IceCreamContainer];
      i++
    ) {
      emptyFlavors.push({ id: i, flavor: null });
    }
    updateSelectedFlavors(emptyFlavors);
  };

  return (
    <FlavorContext.Provider
      value={{
        selectedFlavors,
        updateSelectedFlavors,
        addFlavor,
        removeFlavor,
        resetFlavors,
      }}
    >
      {children}
    </FlavorContext.Provider>
  );
}
