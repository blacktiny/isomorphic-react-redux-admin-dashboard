import { Pagination } from 'antd';
import AntPagination from './Pagination.style';
import WithDirection from '../../../hocs/withDirection';

const Paginations = AntPagination(Pagination);
const isoPagination = WithDirection(Paginations);

export default isoPagination;
