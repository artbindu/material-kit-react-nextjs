'use client';
"use strict";
exports.__esModule = true;
exports.Traffic = void 0;
var React = require("react");
var Card_1 = require("@mui/material/Card");
var CardContent_1 = require("@mui/material/CardContent");
var CardHeader_1 = require("@mui/material/CardHeader");
var Stack_1 = require("@mui/material/Stack");
var styles_1 = require("@mui/material/styles");
var Typography_1 = require("@mui/material/Typography");
var Desktop_1 = require("@phosphor-icons/react/dist/ssr/Desktop");
var DeviceTablet_1 = require("@phosphor-icons/react/dist/ssr/DeviceTablet");
var Phone_1 = require("@phosphor-icons/react/dist/ssr/Phone");
var chart_1 = require("@/components/core/chart");
var iconMapping = { Desktop: Desktop_1.Desktop, Tablet: DeviceTablet_1.DeviceTablet, Phone: Phone_1.Phone };
function Traffic(_a) {
    var chartSeries = _a.chartSeries, labels = _a.labels, sx = _a.sx;
    var chartOptions = useChartOptions(labels);
    return (React.createElement(Card_1["default"], { sx: sx },
        React.createElement(CardHeader_1["default"], { title: "Traffic source" }),
        React.createElement(CardContent_1["default"], null,
            React.createElement(Stack_1["default"], { spacing: 2 },
                React.createElement(chart_1.Chart, { height: 300, options: chartOptions, series: chartSeries, type: "donut", width: "100%" }),
                React.createElement(Stack_1["default"], { direction: "row", spacing: 2, sx: { alignItems: 'center', justifyContent: 'center' } }, chartSeries.map(function (item, index) {
                    var label = labels[index];
                    var Icon = iconMapping[label];
                    return (React.createElement(Stack_1["default"], { key: label, spacing: 1, sx: { alignItems: 'center' } },
                        Icon ? React.createElement(Icon, { fontSize: "var(--icon-fontSize-lg)" }) : null,
                        React.createElement(Typography_1["default"], { variant: "h6" }, label),
                        React.createElement(Typography_1["default"], { color: "text.secondary", variant: "subtitle2" },
                            item,
                            "%")));
                }))))));
}
exports.Traffic = Traffic;
function useChartOptions(labels) {
    var theme = styles_1.useTheme();
    return {
        chart: { background: 'transparent' },
        colors: [theme.palette.primary.main, theme.palette.success.main, theme.palette.warning.main],
        dataLabels: { enabled: false },
        labels: labels,
        legend: { show: false },
        plotOptions: { pie: { expandOnClick: false } },
        states: { active: { filter: { type: 'none' } }, hover: { filter: { type: 'none' } } },
        stroke: { width: 0 },
        theme: { mode: theme.palette.mode },
        tooltip: { fillSeriesColor: false }
    };
}
