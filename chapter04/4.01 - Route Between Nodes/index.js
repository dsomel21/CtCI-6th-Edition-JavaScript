const { test, assert } = require('../../test/TestHelper');

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }
}

function hasPath(start, end) {
  if (start === null || end === null) return false;
  const q = [start];
  while (q.length > 0) {
    const n = q[0];
    if (!n.visited) {
      n.visited = true;
      console.log('n.data: ', n.data, 'end.data', end.data);
      if (n === end) return true;
      if (n.children.length > 0) q.push(...n.children);
    }
    q.shift();
  }
  return false;
}

test('Should return false if a Vertice has NO path to the second vertice', () => {
  const starterNode = new Node(1);
  const n2 = new Node(2);

  const n3 = new Node(3);
  const n4 = new Node(4);

  const n6 = new Node(6);
  const n5 = new Node(5);
  const n7 = new Node(7);
  const n8 = new Node(8);
  const n9 = new Node(9);
  const n10 = new Node(10);
  const n11 = new Node(11);
  const n12 = new Node(12);
  const n13 = new Node(13);

  starterNode.children.push(n2);
  n2.children.push(n3);
  n3.children.push(starterNode, n4);
  n4.children.push(n5, n6, n7, n9);
  n5.children.push(n4);
  n6.children.push(n4, n8);
  n7.children.push(n4);
  n9.children.push(n10);
  n10.children.push(n11);
  n11.children.push(n12);
  n12.children.push(n13);

  const n14 = new Node(14);
  const endNode = new Node(15);
  n14.children.push(endNode);
  endNode.children.push(n14);

  const result = hasPath(starterNode, endNode);
  const expected = false;
  assert(result).toBe(expected);
});

test('Should return true if a Vertice has a path to the second vertice', () => {
  const starterNode = new Node(1);
  const n2 = new Node(2);

  const n3 = new Node(3);
  const n4 = new Node(4);

  const n6 = new Node(6);
  const n5 = new Node(5);
  const n7 = new Node(7);
  const n8 = new Node(8);
  const n9 = new Node(9);
  const n10 = new Node(10);
  const n11 = new Node(11);
  const n12 = new Node(12);
  const n13 = new Node(13);

  starterNode.children.push(n2);
  n2.children.push(n3);
  n3.children.push(starterNode, n4);
  n4.children.push(n5, n6, n7, n9);
  n5.children.push(n4);
  n6.children.push(n4, n8);
  n7.children.push(n4);
  n9.children.push(n10);
  n10.children.push(n11);
  n11.children.push(n12);
  n12.children.push(n13);

  const n14 = new Node(14);
  const endNode = new Node(15);
  n13.children.push(n14); // n13 is pointing to n14
  n14.children.push(endNode);
  endNode.children.push(n14);

  const result = hasPath(starterNode, endNode);
  const expected = true;
  assert(result).toBe(expected);
});
