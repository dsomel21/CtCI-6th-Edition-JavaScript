module.exports = function (node) {
  if (!node) return [];
  const nodes = [];
  while (node) {
    nodes.push(node.data);
    node = node.next;
  }
  return nodes;
};
