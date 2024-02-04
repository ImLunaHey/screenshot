import { Position } from '@/common/position';
import { Item } from '@/components/item';
import { useEffect, useRef } from 'react';

const isMouseEvent = (event: MouseEvent | TouchEvent): event is MouseEvent => {
  return event.type === 'mouseup' || event.type === 'mousedown' || event.type === 'mousemove';
};

const getCoordinates = (event: MouseEvent | TouchEvent, rect: DOMRect, translatePos: Position, scale: number) => {
  const clientX = isMouseEvent(event) ? event.clientX : event.touches[0].clientX;
  const clientY = isMouseEvent(event) ? event.clientY : event.touches[0].clientY;

  // Adjust coordinates for scale and translation
  return {
    x: (clientX - rect.left - translatePos.x) / scale,
    y: (clientY - rect.top - translatePos.y) / scale,
  };
};

/**
 * This hook is used to move an item on a canvas.
 * @param items The items to move.
 * @param translatePos The position of the canvas.
 * @param scale The scale of the canvas.
 * @returns The mouse event handlers.
 */
export const useMoveItem = (
  canvasRef: React.RefObject<HTMLCanvasElement>,
  items: Item[],
  translatePos: Position,
  scale: number,
) => {
  return;
  // const currentItem = useRef<number | null>(null);
  // const mouseRef = useRef({ x: 0, y: 0 });

  // useEffect(() => {
  //   const canvas = canvasRef.current;
  //   if (!canvas) return;

  //   const onMouseDown = (event: MouseEvent) => {
  //     const rect = (event.currentTarget as HTMLCanvasElement).getBoundingClientRect();
  //     const { x: mouseX, y: mouseY } = getCoordinates(event, rect, translatePos, scale);

  //     // Check if an item is being clicked
  //     for (let i = items.length - 1; i >= 0; i--) {
  //       const item = items[i];
  //       if (mouseX > item.x && mouseX < item.x + item.width && mouseY > item.y && mouseY < item.y + item.height) {
  //         currentItem.current = i;
  //         mouseRef.current.x = mouseX - item.x;
  //         mouseRef.current.y = mouseY - item.y;
  //         return;
  //       }
  //     }
  //   };

  //   const onTouchStart = (event: TouchEvent) => {
  //     const rect = (event.currentTarget as HTMLCanvasElement).getBoundingClientRect();
  //     const { x: touchX, y: touchY } = getCoordinates(event, rect, translatePos, scale);

  //     // Logic similar to onMouseDown using touchX and touchY
  //     for (let i = items.length - 1; i >= 0; i--) {
  //       const item = items[i];
  //       if (touchX > item.x && touchX < item.x + item.width && touchY > item.y && touchY < item.y + item.height) {
  //         currentItem.current = i;
  //         mouseRef.current.x = touchX - item.x;
  //         mouseRef.current.y = touchY - item.y;
  //         return;
  //       }
  //     }
  //   };

  //   const onMouseMove = (event: MouseEvent) => {
  //     if (currentItem.current === null) return;

  //     const rect = (event.currentTarget as HTMLCanvasElement).getBoundingClientRect();
  //     const { x: mouseX, y: mouseY } = getCoordinates(event, rect, translatePos, scale);

  //     const item = items[currentItem.current];
  //     item.x = mouseX - mouseRef.current.x;
  //     item.y = mouseY - mouseRef.current.y;
  //   };

  //   const onTouchMove = (event: TouchEvent) => {
  //     if (currentItem.current === null) return;

  //     const rect = (event.currentTarget as HTMLCanvasElement).getBoundingClientRect();
  //     const { x: touchX, y: touchY } = getCoordinates(event, rect, translatePos, scale);

  //     const item = items[currentItem.current];
  //     item.x = touchX - mouseRef.current.x;
  //     item.y = touchY - mouseRef.current.y;
  //   };

  //   const onMouseUp = () => {
  //     currentItem.current = null;
  //   };

  //   const onTouchEnd = () => {
  //     currentItem.current = null;
  //   };

  //   // Binding the event handlers
  //   canvas.addEventListener('mousedown', onMouseDown);
  //   canvas.addEventListener('touchstart', onTouchStart);
  //   canvas.addEventListener('mousemove', onMouseMove);
  //   canvas.addEventListener('touchmove', onTouchMove);
  //   canvas.addEventListener('mouseup', onMouseUp);
  //   canvas.addEventListener('touchend', onTouchEnd);

  //   // Cleanup function to unbind the event handlers
  //   return () => {
  //     canvas.removeEventListener('mousedown', onMouseDown);
  //     canvas.removeEventListener('touchstart', onTouchStart);
  //     canvas.removeEventListener('mousemove', onMouseMove);
  //     canvas.removeEventListener('touchmove', onTouchMove);
  //     canvas.removeEventListener('mouseup', onMouseUp);
  //     canvas.removeEventListener('touchend', onTouchEnd);
  //   };
  // }, [canvasRef, items, translatePos, scale]);

  // return currentItem;
};
