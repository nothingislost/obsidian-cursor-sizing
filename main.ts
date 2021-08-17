import { Plugin } from "obsidian";
export default class CursorSizePlugin extends Plugin {
  async onload() {
    this.registerCodeMirror((cm: CodeMirror.Editor) => {
      cm.setOption("singleCursorHeightPerLine", false);
    });
  }
}
