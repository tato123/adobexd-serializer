export default class XDLinkedGraphicWrapper {
  constructor(xdNode) {
    this.xdNode = xdNode;
    this.parentNodeWrapper = new XDSceneNodeWrapper(this.xdNode);
  }

  toJSON() {
    let result = {};

    if (this.parentNodeWrapper) {
      result = this.parentNodeWrapper.toJSON();
    }

    const node = this.xdNode;
    return {
      type: node.constructor.name,

      ...result
    };
  }
}
