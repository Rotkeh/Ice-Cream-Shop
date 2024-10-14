import { createContext, ReactNode, useState } from "react";
import { Flavor, IDraggableItem, IFlavorsContext } from "../interfaces";

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

  const setupFlavors = (flavors: any) => {
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

  return (
    <FlavorContext.Provider
      value={{
        selectedFlavors,
        setupFlavors,
        addFlavor,
        removeFlavor,
      }}
    >
      {children}
    </FlavorContext.Provider>
  );
}
