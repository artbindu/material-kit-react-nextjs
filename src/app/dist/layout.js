"use strict";
exports.__esModule = true;
exports.Viewport = exports.satisfies = exports.viewport = void 0;
var React = require("react");
require("@/styles/global.css");
var user_context_1 = require("@/contexts/user-context");
var localization_provider_1 = require("@/components/core/localization-provider");
var theme_provider_1 = require("@/components/core/theme-provider/theme-provider");
exports.viewport = { width: 'device-width', initialScale: 1 };
function Layout(_a) {
    var children = _a.children;
    return (React.createElement("html", { lang: "en" },
        React.createElement("body", null,
            React.createElement(localization_provider_1.LocalizationProvider, null,
                React.createElement(user_context_1.UserProvider, null,
                    React.createElement(theme_provider_1.ThemeProvider, null, children))))));
}
exports["default"] = Layout;
