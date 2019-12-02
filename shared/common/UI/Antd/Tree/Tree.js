import { Tree } from 'antd';
import AntTree from './Tree.style';
import WithDirection from '../../../hocs/withDirection';

const WDTrees = AntTree(Tree);
const Trees = WithDirection(WDTrees);

const TreeNode = Tree.TreeNode;

export default Trees;
export { TreeNode };
