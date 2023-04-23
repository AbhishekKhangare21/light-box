const useTraverseTree = () => {
  function insertNode(tree, folderId, item, isFolder) {
    if (tree.id === folderId && tree.isFolder) {
      tree.items.unShift({
        id: new Date().getTime(),
        name: item,
        isFolder,
        items: [],
      });
    }
  }
  return { insertNode };
};

export default useTraverseTree;
