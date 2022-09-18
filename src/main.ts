import App from "./App.vue";
import { createApp } from "vue";

// Router
import router from "./router";

// Tooltip
import FloatingVue from "floating-vue";
import "floating-vue/dist/style.css";

// Material Design Icons
import mdiVue from "mdi-vue/v3";
import * as mdijs from "@mdi/js";

// Directives
import { Sticky } from "./directives/Sticky";
import { Primary } from "./directives/Primary";

// Custom Components
import Divider from "./components/Divider.vue";
import IconButton from "./components/IconButton.vue";
import SimpleTable from "./components/SimpleTable.vue";
// - inputs
import TextField from "./components/inputs/TextField.vue";

// Components
import VueApexCharts from "vue3-apexcharts";

import Toggle from "@vueform/toggle";
import "@vueform/toggle/themes/default.css";

// Tailwind styles
import "./index.css";

const app = createApp(App);

// Router
app.use(router);

// Tooltip
app.use(FloatingVue);

// Material Design Icons
app.use(mdiVue, { icons: mdijs });

// Directives
app.directive("sticky", Sticky);
app.directive("primary", Primary);

// Custom Components
app.component("divider", Divider);
app.component("simple-table", SimpleTable);
app.component("text-field", TextField);
app.component("icon-button", IconButton);

// Components
// - <apexchart>
// - https://apexcharts.com/docs/vue-charts/
app.use(VueApexCharts);
// - <toggle> / switch button
app.component("toggle", Toggle);

// Main app
app.mount("#app");
