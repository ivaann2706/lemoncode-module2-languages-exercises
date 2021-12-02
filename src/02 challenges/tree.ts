console.log("*** Tree ***");

interface Nodo<T> {
  name: T;
  children: Nodo<T>[];
  parent?: Nodo<T>;
}

interface Tree<T> {
  root: Nodo<T>;
}

const isRoot = <T>(nodo: Nodo<T>): boolean => {
  return !nodo.parent;
};

const isLeaf = <T>(nodo: Nodo<T>): boolean => {
  return nodo.children.length === 0;
};

const addChild = <T>(nodo: Nodo<T>, name: T): void => {
  const child = {
    name: name,
    parent: nodo,
    children: [],
  };
  nodo.children = [...nodo.children, child];
};

const getParent = <T>(nodo: Nodo<T>): Nodo<T> | undefined => {
  if (isRoot(nodo)) {
    console.log("This node is the root and has no parent");
    return undefined;
  } else {
    return nodo.parent;
  }
};

const getChildren = <T>(nodo: Nodo<T>): Nodo<T>[] => {
  if (isLeaf(nodo)) {
    console.log("This node is a leaf and has no children");
  }
  return nodo.children;
};

const nodo_root: Nodo<string> = {
  name: "raíz",
  children: [],
};

const tree: Tree<string> = {
  root: nodo_root,
};

addChild(nodo_root, "1");
addChild(nodo_root, "2");
addChild(nodo_root, "3");

const children = getChildren(nodo_root);

children.forEach((child) => {
  const name = `${child.name}-1`;
  addChild(child, name);
});

console.log("isRoot(nodo_root)", isRoot(nodo_root)); // true
console.log("isLeaf(nodo_root)", isLeaf(nodo_root)); // false
