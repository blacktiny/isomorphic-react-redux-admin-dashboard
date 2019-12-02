import { AntAutoComplete } from '.autoComplete.style';
import WithDirection from '../../../hocs/withDirection';

const AutoCompletes = WithDirection(AntAutoComplete);
const AutoCompleteOption = AutoComplete.Option;

export default AutoCompletes;
export { AutoCompleteOption };
