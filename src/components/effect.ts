import { Node } from './node';

export abstract class Effect {
  public readonly stage: 'before' | 'after' = 'after';
  constructor() {}

  abstract setNode(node: Node): void;
  abstract render(ctx: CanvasRenderingContext2D, translatePos: { x: number; y: number }, scale: number): void;
}
