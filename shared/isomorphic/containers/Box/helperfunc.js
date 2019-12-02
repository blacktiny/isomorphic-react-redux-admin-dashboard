const generateLayoutfunc = allBox => {
  const mdLayouts = [];
  const lgLayouts = [];
  const smLayouts = [];
  const xsLayouts = [];
  const xxsLayouts = [];
  allBox.forEach(box => {
    mdLayouts.push({
      ...box,
      x: parseInt(box.size.md.x, 10),
      y: parseInt(box.size.md.y, 10),
      h: parseInt(box.size.md.h, 10),
      w: parseInt(box.size.md.w, 10),
      i: box.size.md.i.toString(),
    });
    lgLayouts.push({
      ...box,
      x: parseInt(box.size.lg.x, 10),
      y: parseInt(box.size.lg.y, 10),
      h: parseInt(box.size.lg.h, 10),
      w: parseInt(box.size.lg.w, 10),
      i: box.size.lg.i.toString(),
    });
    smLayouts.push({
      ...box,
      x: parseInt(box.size.sm.x, 10),
      y: parseInt(box.size.sm.y, 10),
      h: parseInt(box.size.sm.h, 10),
      w: parseInt(box.size.sm.w, 10),
      i: box.size.sm.i.toString(),
    });
    xsLayouts.push({
      ...box,
      x: parseInt(box.size.xs.x, 10),
      y: parseInt(box.size.xs.y, 10),
      h: parseInt(box.size.xs.h, 10),
      w: parseInt(box.size.xs.w, 10),
      i: box.size.xs.i.toString(),
    });
    xxsLayouts.push({
      ...box,
      x: parseInt(box.size.xxs.x, 10),
      y: parseInt(box.size.xxs.y, 10),
      h: parseInt(box.size.xxs.h, 10),
      w: parseInt(box.size.xxs.w, 10),
      i: box.size.xxs.i.toString(),
    });
  });
  return {
    md: mdLayouts,
    lg: lgLayouts,
    sm: smLayouts,
    xs: xsLayouts,
    xxs: xxsLayouts,
  };
};

const indexOfBoxfunc = (allBox, uid) => {
  let boxIndex = -1;
  allBox.forEach((box, index) => {
    if (box.uid.toString() === uid.toString()) {
      boxIndex = index;
    }
  });
  return boxIndex;
};

export { generateLayoutfunc, indexOfBoxfunc };
