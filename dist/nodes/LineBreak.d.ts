import Node from "./Node";
export default class LineBreak extends Node {
    get name(): string;
    get schema(): {
        inline: boolean;
        group: string;
        selectable: boolean;
        parseDOM: {
            tag: string;
        }[];
        toDOM(): string[];
    };
    keys({ type }: {
        type: any;
    }): {
        "Shift-Enter": (state: any, dispatch: any) => void;
    };
    toMarkdown(state: any, node: any): void;
    get markdownToken(): string;
}
//# sourceMappingURL=LineBreak.d.ts.map