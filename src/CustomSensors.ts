import {
  PointerSensor as LibPointerSensor,
  TouchSensor as LibTouchSensor,
  KeyboardSensor as LibKeyboardSensor,
} from "@dnd-kit/core";
import { MouseEvent, TouchEvent, KeyboardEvent } from "react";

const handler = ({
  nativeEvent: event,
}: MouseEvent | TouchEvent | KeyboardEvent) => {
  let cur = event.target as HTMLElement;

  while (cur) {
    if (cur.dataset && cur.dataset.noDnd) {
      return false;
    }
    cur = cur.parentElement as HTMLElement;
  }

  return true;
};

export class PointerSensor extends LibPointerSensor {
  static activators = [
    { eventName: "onPointerDown", handler },
  ] as (typeof LibPointerSensor)["activators"];
}

export class KeyboardSensor extends LibKeyboardSensor {
  static activators = [
    { eventName: "onKeyDown", handler },
  ] as (typeof LibKeyboardSensor)["activators"];
}

export class TouchSensor extends LibTouchSensor {
  static activators = [
    { eventName: "onTouchStart", handler },
  ] as (typeof LibTouchSensor)["activators"];
}
