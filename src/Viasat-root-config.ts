import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import { eventBus } from "./state";
import theme from "./style/theme";
import { globalCSS } from "./style/typefaces";

const routes = constructRoutes(
  document.querySelector("#single-spa-layout") as HTMLTemplateElement
);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach((app) => {
  return registerApplication(
    app.name,
    () => System.import(app.name),
    (location) => location.pathname.startsWith("/"),
    { eventBus, globalCSS, theme }
  );
});

layoutEngine.activate();
start();
