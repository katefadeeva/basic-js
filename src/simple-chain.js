const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if (typeof position !== "number" || position == '' || this.chain[position] === undefined) {
			this.chain = [];
			throw new Error("Message");
		}
		this.chain.splice(position - 1, 1);
		return this;
  },
  reverseChain() {
    this.chain.reverse();
		return this;
  },
  finishChain() {
    let str = "";
        for (let el of this.chain) {
            str += `( ${el} )~~`;
        }
        this.chain = [];
        return str.slice(0, -2);
  }
};

module.exports = chainMaker;
