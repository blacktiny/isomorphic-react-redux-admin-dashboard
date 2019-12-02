import { lazy } from 'react';
const SimpleLineCharts = lazy(() => import('./SimpleLineCharts'));
const CustomizedDotLineChart = lazy(() => import('./CustomizedDotLineChart'));
const SimpleBarChart = lazy(() => import('./SimpleBarChart'));
const MixBarChart = lazy(() => import('./MixBarChart'));
const CustomShapeBarChart = lazy(() => import('./CustomShapeBarChart'));
const BiaxialBarChart = lazy(() => import('./BiaxialBarChart'));
const SimpleAreaChart = lazy(() => import('./SimpleAreaChart'));
const StackedAreaChart = lazy(() => import('./StackedAreaChart'));
const LineBarAreaComposedChart = lazy(() =>
  import('./LineBarAreaComposedChart')
);
const CustomActiveShapePieChart = lazy(() =>
  import('./CustomActiveShapePieChart')
);
const SpecifiedDomainRadarChart = lazy(() =>
  import('./SpecifiedDomainRadarChart')
);
const SimpleRadialBarChart = lazy(() => import('./SimpleRadialBarChart'));
const LegendEffectOpacity = lazy(() => import('./LegendEffectOpacity'));

export {
  SimpleLineCharts,
  CustomizedDotLineChart,
  SimpleBarChart,
  MixBarChart,
  CustomShapeBarChart,
  BiaxialBarChart,
  SimpleAreaChart,
  StackedAreaChart,
  LineBarAreaComposedChart,
  CustomActiveShapePieChart,
  SpecifiedDomainRadarChart,
  SimpleRadialBarChart,
  LegendEffectOpacity,
};
