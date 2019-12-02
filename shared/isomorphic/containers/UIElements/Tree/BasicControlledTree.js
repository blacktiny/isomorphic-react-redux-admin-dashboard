import React from 'react';
import Tree, { TreeNode } from '@iso/components/uielements/tree';

const x = 3;
const y = 2;
const z = 1;
const gData = [];

const generateData = (_level, _preKey, _tns) => {
  const preKey = _preKey || '0';
  const tns = _tns || gData;

  const children = [];
  for (let i = 0; i < x; i++) {
    const key = `${preKey}-${i}`;
    tns.push({ title: key, key });
    if (i < y) {
      children.push(key);
    }
  }
  if (_level < 0) {
    return tns;
  }
  const level = _level - 1;
  children.forEach((key, index) => {
    tns[index].children = [];
    return generateData(level, key, tns[index].children);
  });
};
generateData(z);

export default function() {
  const [expandedKeys, setExpandedKeys] = React.useState(['0-0-0', '0-0-1']);
  const [autoExpandParent, setAutoExpandParent] = React.useState(true);
  const [checkedKeys, setCheckedKeys] = React.useState(['0-0-0']);
  const [selectedKeys, setSelectedKeys] = React.useState([]);

  const onExpand = expandedKeys => {
    // if not set autoExpandParent to false, if children expanded, parent can not collapse.
    // or, you can remove all expanded children keys.
    setExpandedKeys(expandedKeys);
    setAutoExpandParent(false);
  };
  const onCheck = checkedKeys => {
    setCheckedKeys(checkedKeys);
    setSelectedKeys(['0-3', '0-4']);
  };
  const onSelect = (selectedKeys, info) => {
    setSelectedKeys(selectedKeys);
  };
  const loop = data =>
    data.map(item => {
      if (item.children) {
        return (
          <TreeNode
            key={item.key}
            title={item.key}
            disableCheckbox={item.key === '0-0-0'}
          >
            {loop(item.children)}
          </TreeNode>
        );
      }
      return <TreeNode key={item.key} title={item.key} />;
    });
  return (
    <Tree
      checkable
      onExpand={onExpand}
      expandedKeys={expandedKeys}
      autoExpandParent={autoExpandParent}
      onCheck={onCheck}
      checkedKeys={checkedKeys}
      onSelect={onSelect}
      selectedKeys={selectedKeys}
    >
      {loop(gData)}
    </Tree>
  );
}
