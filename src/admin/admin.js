// src/config/admin.js
import AdminJS from "adminjs";
import * as AdminJSSequelize from "@adminjs/sequelize";
import { TurbosResource } from "./resources/TurbosResource.js";
import { CardResource } from "./resources/CardResource.js";
import { FaqResource } from "./resources/FaqResource.js";
import { FooterResource } from "./resources/FooterResource.js";
import { HomeResource } from "./resources/HomeResource.js";
import { translations } from "./translate.js";
import { componentLoader, Components } from "./components/components.js";
import { EventResource } from "./resources/EventResource.js";
import { ExhaustsResource } from "./resources/ExhaustsResource.js";
import { ManifoldsResource } from "./resources/ManifoldsResource.js";
import { InjectorsResource } from "./resources/InjectorsResource.js";
import { PumpsResource } from "./resources/PumpsResource.js";

AdminJS.registerAdapter({
  Resource: AdminJSSequelize.Resource,
  Database: AdminJSSequelize.Database,
});

export const admin = new AdminJS({
  resources: [
    CardResource,
    TurbosResource,
    ExhaustsResource,
    ManifoldsResource,
    InjectorsResource,
    PumpsResource,
    EventResource,
    HomeResource,
    FaqResource,
    FooterResource,
  ],
  componentLoader: componentLoader,
  locale: {
    language: "pt-BR",
    availableLanguages: ["pt-BR", "en"],
    translations: translations,
  },
  branding: {
    companyName: "Speed Pro Admin",
    logo: "/uploads/logo/Logo.png",
    softwareBrothers: false,
    favicon: "uploads/logo/favicon.ico",
    withMadeWithLove: false,
    theme: {
      colors: {
        primary100: "#f03712",
        primary80: "#f03712",
        primary60: "#f03712",
        primary40: "#f03712",
        primary20: "#f03712",

        accent: "#f03712",
        hoverBg: "#c72e0f",
        filterBg: "#f03712",

        text: "#000000ff",
        textOnPrimary: "#000000ff",

        link: "#f03712",
      }
    }
  },
  dashboard: {
    component: Components.HomePage,
  },
  assets: {
    styles: ["/custom-admin.css"],
  },
});
admin.watch();
