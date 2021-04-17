"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Node_1 = __importDefault(require("./Node"));
class LineBreak extends Node_1.default {
    get name() {
        return "hard_break";
    }
    get schema() {
        return {
            inline: true,
            group: "inline",
            selectable: false,
            parseDOM: [{ tag: "br" }],
            toDOM() { return ["br"]; }
        };
    }
    keys({ type }) {
        return {
            "Shift-Enter": (state, dispatch) => {
                console.log(state);
                dispatch(state.tr.replaceSelectionWith(type.create()).scrollIntoView());
            }
        };
    }
    toMarkdown(state, node) {
        state.write("\n");
    }
    get markdownToken() {
        return "hard_break";
    }
}
exports.default = LineBreak;
//# sourceMappingURL=LineBreak.js.map