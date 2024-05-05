import { CanAccess, Authenticated, Refine, I18nProvider } from "@refinedev/core";
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";
import { useTranslation } from "react-i18next";
import {
  AuthPage,
  ErrorComponent,
  ThemedLayoutV2,
  ThemedSiderV2,
  ThemedTitleV2,
  useNotificationProvider,
} from "@refinedev/antd";
import "@refinedev/antd/dist/reset.css";

import routerBindings, {
  CatchAllNavigate,
  DocumentTitleHandler,
  NavigateToResource,
  UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import { dataProvider, liveProvider } from "@refinedev/supabase";
// import { AntdInferencer } from "@refinedev/inferencer/antd";
import { App as AntdApp } from "antd";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import authProvider from "./provider/authProvider";
import accessControlProvider from "./provider/casbin/accessControlProvider";
import { resources } from "./config";
import { AppIcon } from "./components/app-icon";
import { Header } from "./components/header";
import { ColorModeContextProvider } from "./contexts/color-mode";
import {
  UsersPage,
  UserEdit,
  UserShow
} from "./pages/users";
import { 
  VolontaireList,
  VolontaireCreate,
  VolontaireEdit,
  VolontaireShow
} from "./pages/volontaires";
import {
  OrganisationsList,
  OrganisationsCreate,
  OrganisationsShow,
  OrganisationsEdit
} from './pages/organisations'
import {
  TypesDeVolontaireList,
  TypesDeVolontaireCreate,
  TypesDeVolontaireEdit
} from "./pages/administration/volontaires";
import {
  OrganisationList,
  OrganisationCreate,
  OrganisationEdit
} from './pages/administration/organisations';
import { RegisterPage } from "./pages/auth/register";
import { supabaseClient } from "./utility";

function App() {
  const { t, i18n } = useTranslation();

  const i18nProvider: I18nProvider = {
    translate: (key: string, options?: { [key: string]: any }) => t(key, options),
    changeLocale: (lang: string) => i18n.changeLanguage(lang),
    getLocale: () => i18n.language,
  };

  return (
    <BrowserRouter>
      <RefineKbarProvider>
        <ColorModeContextProvider>
          <AntdApp>
            <DevtoolsProvider>
              <Refine
                accessControlProvider={accessControlProvider}
                i18nProvider={i18nProvider}
                dataProvider={dataProvider(supabaseClient)}
                liveProvider={liveProvider(supabaseClient)}
                authProvider={authProvider}
                routerProvider={routerBindings}
                notificationProvider={useNotificationProvider}
                resources={resources}
                options={{
                  syncWithLocation: true,
                  warnWhenUnsavedChanges: true,
                  useNewQueryKeys: true,
                  projectId: "tfL11s-ZBG7o3-3YMVD8",
                }}
              >
                <Routes>
                  <Route
                    element={
                      <Authenticated
                        key="authenticated-inner"
                        fallback={<CatchAllNavigate to="/login" />}
                      >
                        <ThemedLayoutV2
                          Header={() => <Header sticky />}
                          Sider={(props) => <ThemedSiderV2 {...props} fixed />}
                          Title={({ collapsed }) => (
                            <ThemedTitleV2
                              collapsed={collapsed}
                              text="Penc Mi"
                              icon={<AppIcon />}
                            />
                          )}
                        >
                          <CanAccess>
                            <Outlet />
                          </CanAccess>
                        </ThemedLayoutV2>
                      </Authenticated>
                    }
                  >
                    <Route
                      index
                      element={<UsersPage />}
                    />
                    <Route path="/users">
                      <Route path="/users/edit/:id" element={<UserEdit />} />
                      <Route path="/users/show/:id" element={<UserShow />} />
                    </Route>
                    <Route path="/volontaires">
                      <Route index element={<VolontaireList />} />
                      <Route path="/volontaires/create" element={<VolontaireCreate />} />
                      <Route path="/volontaires/edit/:id" element={<VolontaireEdit />} />
                      <Route path="/volontaires/show/:id" element={<VolontaireShow />} />
                    </Route>
                    <Route path="/organisations">
                      <Route index element={<OrganisationsList />} />
                      <Route path="/organisations/create" element={<OrganisationsCreate />} />
                      <Route path="/organisations/edit/:id" element={<OrganisationsEdit />} />
                      <Route path="/organisations/show/:id" element={<OrganisationsShow />} />
                    </Route>
                    <Route path="/administration/volontaires">
                      <Route index element={<TypesDeVolontaireList />} />
                      <Route path="/administration/volontaires/create" element={<TypesDeVolontaireCreate />} />
                      <Route path="/administration/volontaires/edit/:id" element={<TypesDeVolontaireEdit />} />
                    </Route>
                    <Route path="/administration/organisations">
                      <Route index element={<OrganisationList />} />
                      <Route path="/administration/organisations/create" element={<OrganisationCreate />} />
                      <Route path="/administration/organisations/edit/:id" element={<OrganisationEdit />} />
                    </Route>
                    <Route path="*" element={<ErrorComponent />} />
                  </Route>
                  <Route
                    element={
                      <Authenticated
                        key="authenticated-outer"
                        fallback={<Outlet />}
                      >
                        <NavigateToResource />
                      </Authenticated>
                    }
                  >
                    <Route
                      path="/login"
                      element={
                        <AuthPage
                          type="login"
                          title={
                            <ThemedTitleV2
                              collapsed={false}
                              text="Penc Mi"
                              icon={<AppIcon />}
                            />
                          }
                          providers={[
                            {
                              name: "google",
                              label: "Connectez-vous avec Google",
                            }
                          ]}
                        />
                      }
                    />
                    <Route
                      path="/register"
                      element={
                        <RegisterPage
                          title={
                            <ThemedTitleV2
                              collapsed={false}
                              text="Penc Mi"
                              icon={<AppIcon />}
                            />
                          }
                        />}
                    />
                    <Route
                      path="/forgot-password"
                      element={<AuthPage type="forgotPassword" />}
                    />
                  </Route>
                </Routes>

                <RefineKbar />
                <UnsavedChangesNotifier />
                <DocumentTitleHandler />
              </Refine>
              <DevtoolsPanel />
            </DevtoolsProvider>
          </AntdApp>
        </ColorModeContextProvider>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;
