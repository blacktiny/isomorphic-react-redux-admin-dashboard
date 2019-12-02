import React from 'react';
import Tree, { TreeNode } from '@iso/components/uielements/tree';

function generateTreeNodes(treeNode) {
  const arr = [];
  const key = treeNode.props.eventKey;
  for (let i = 0; i < 3; i++) {
    arr.push({ name: `leaf ${key}-${i}`, key: `${key}-${i}` });
  }
  return arr;
}

function setLeaf(treeData, curKey, level) {
  const loopLeaf = (data, lev) => {
    const l = lev - 1;
    data.forEach(item => {
      if (
        item.key.length > curKey.length
          ? item.key.indexOf(curKey) !== 0
          : curKey.indexOf(item.key) !== 0
      ) {
        return;
      }
      if (item.children) {
        loopLeaf(item.children, l);
      } else if (l < 1) {
        item.isLeaf = true;
      }
    });
  };
  loopLeaf(treeData, level + 1);
}

function getNewTreeData(treeData, curKey, child, level) {
  const loop = data => {
    if (level < 1 || curKey.length - 3 > level * 2) return;
    data.forEach(item => {
      if (curKey.indexOf(item.key) === 0) {
        if (item.children) {
          loop(item.children);
        } else {
          item.children = child;
        }
      }
    });
  };
  loop(treeData);
  setLeaf(treeData, curKey, level);
}

export default function() {
  const [treeData, setTreeData] = React.useState([]);
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setTreeData([
        { name: 'pNode 01', key: '0-0' },
        { name: 'pNode 02', key: '0-1' },
        { name: 'pNode 03', key: '0-2', isLeaf: true },
      ]);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const onSelect = info => {};
  const onLoadData = treeNode => {
    return new Promise(resolve => {
      setTimeout(() => {
        const newTreeData = [...treeData];
        getNewTreeData(
          treeData,
          treeNode.props.eventKey,
          generateTreeNodes(treeNode),
          2
        );
        setTreeData(newTreeData);
        resolve();
      }, 1000);
    });
  };
  const loop = data =>
    data.map(item => {
      if (item.children) {
        return (
          <TreeNode title={item.name} key={item.key}>
            {loop(item.children)}
          </TreeNode>
        );
      }
      return (
        <TreeNode
          title={item.name}
          key={item.key}
          isLeaf={item.isLeaf}
          disabled={item.key === '0-0-0'}
        />
      );
    });
  const treeNodes = loop(treeData);
  return (
    <Tree onSelect={onSelect} loadData={onLoadData}>
      {treeNodes}
    </Tree>
  );
}
