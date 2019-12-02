import clone from 'clone';

let count = 0;

function getOption() {
  const option = {
    title: {},
    tooltip: { trigger: 'axis' },
    Legend: { data: ['latest transaction price', 'pre - order queue'] },
    toolbox: {
      show: true,
      feature: {
        dataView: {
          readOnly: false,
          title: 'View',
          lang: ['data view', 'turn off', 'refresh'],
        },
        restore: {
          title: 'Reset',
        },
        saveAsImage: {
          title: 'Download',
        },
      },
    },
    grid: {
      top: 60,
      left: 30,
      right: 60,
      bottom: 30,
    },
    dataZoom: {
      show: false,
      start: 0,
      end: 100,
    },
    visualMap: {
      show: false,
      min: 0,
      max: 1000,
      color: [
        '#554faf',
        '#f4f5f6',
        '#3f2159',
        '#9d54ad',
        '#968acf',
        '#6f68cb',
        '#d2d1d6',
        '#d78da8',
        '#f6fbfd',
        '#584ba1',
        '#d7edf8',
        '#914692',
        '#c64187',
        '#98b0c8',
        '#a3d1e6',
        '#cad8e3',
        '#795cae',
        '#de8e90',
        '#f09875',
        '#e0a695',
        '#e86e7a',
      ],
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: true,
        data: (() => {
          let now = new Date();
          let res = [];
          let len = 20;
          while (len--) {
            res.unshift(now.toLocaleTimeString().replace(/^\D*/, ''));
            now = new Date(now - 2000);
          }
          return res;
        })(),
      },
      {
        type: 'category',
        boundaryGap: true,
        data: (() => {
          let res = [];
          let len = 20;
          while (len--) {
            res.push(20 - len + 1);
          }
          return res;
        })(),
      },
    ],
    yAxis: [
      {
        type: 'value',
        scale: true,
        name: 'Value Y',
        max: 20,
        min: 0,
        boundaryGap: [0.2, 0.2],
      },
      {
        type: 'value',
        scale: true,
        name: 'Value X',
        max: 1200,
        min: 0,
        boundaryGap: [0.2, 0.2],
      },
    ],
    series: [
      {
        name: 'Pre - order queue',
        type: 'bar',
        xAxisIndex: 1,
        yAxisIndex: 1,
        itemStyle: {
          normal: {
            barBorderRadius: 4,
          },
        },
        animationEasing: 'elasticOut',
        animationDelay: idx => {
          return idx * 10;
        },
        animationDelayUpdate: idx => {
          return idx * 10;
        },
        data: (() => {
          let res = [];
          let len = 20;
          while (len--) {
            res.push(Math.round(Math.random() * 1000));
          }
          return res;
        })(),
      },
      {
        name: 'Latest transaction price',
        type: 'line',
        data: (() => {
          let res = [];
          let len = 0;
          while (len < 20) {
            res.push((Math.random() * 10 + 5).toFixed(1) - 0);
            len++;
          }
          return res;
        })(),
      },
    ],
  };
  return option;
}
function fetchNewDate(option) {
  let axisData = new Date().toLocaleTimeString().replace(/^\D*/, '');
  let data0 = option.series[0].data;
  let data1 = option.series[1].data;
  data0.shift();
  data0.push(Math.round(Math.random() * 1000));
  data1.shift();
  data1.push((Math.random() * 10 + 5).toFixed(1) - 0);

  option.xAxis[0].data.shift();
  option.xAxis[0].data.push(axisData);
  option.xAxis[1].data.shift();
  option.xAxis[1].data.push(count++);
  return option;
}
const initState = {
  option: getOption(),
};

export default function calendsrReducer(state = initState, action) {
  switch (action.type) {
    case 'UPDATE_OPTION':
      return {
        ...state,
        option: clone(fetchNewDate(state.get('option'))),
      };
    default:
      return state;
  }
}
export function updateOption() {
  return {
    type: 'UPDATE_OPTION',
  };
}
