export default function rehypeRemoveImages(this: import("unified").Processor<void, import("hast").Root, void, void>, ...settings: void[]): void | import("unified").Transformer<import("hast").Root, import("hast").Root>;
export type Root = import('hast').Root;
export type Node = import('unist').Node;
export type HastNode = Root | Root['children'][number];
