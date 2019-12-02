import allBox from './DemoBox';
import boxActions from './actions';
const generateLayout = () => {
  let y = -2;
  const h = 2;
  const w = 48;
  allBox.map((box, index) => {
    let temp = {};
    temp.lg = {
      x: index % 2 === 0 ? 0 : 48,
      y: y + h,
      h,
      w,
      i: box.uid.toString(),
    };
    temp.md = {
      x: index % 2 === 0 ? 0 : 48,
      y: y + h,
      h,
      w,
      i: box.uid.toString(),
    };
    temp.sm = {
      x: index % 2 === 0 ? 0 : 48,
      y: y + h,
      h,
      w,
      i: box.uid.toString(),
    };
    temp.xs = {
      x: index % 2 === 0 ? 0 : 48,
      y: y + h,
      h,
      w,
      i: box.uid.toString(),
    };
    temp.xxs = {
      x: index % 2 === 0 ? 0 : 48,
      y: y + h,
      h,
      w,
      i: box.uid.toString(),
    };
    allBox[index].size = temp;
    return null;
  });
  return allBox;
};

const initState = {
  allBox: generateLayout(),
  reload: false,
};

export default function boxReducer(state = initState, action) {
  const { allBox } = state;
  switch (action.type) {
    case boxActions.DELETE_BOX:
      let tempAllBox = [];
      allBox.map(box => {
        if (box.uid.toString() !== action.uid.toString()) {
          tempAllBox.push(box);
        }
        return null;
      });
      return {
        ...state,
        allBox: tempAllBox,
        reload: true,
      };
    case boxActions.SAVE_BOX:
      return {
        ...state,
        reload: false,
        allBox: action.box,
      };
    default:
      return state;
  }
}
