import { Injectors } from "../../models/Injectors.js";
import { Components } from "../components/components.js";
import {
  uploadBeforeHook,
  uploadAfterHook,
} from "../actions/upload-image.hook.js";

export const InjectorsResource = {
  resource: Injectors,
  options: {
    listProperties: ["id", "name", "uploadImage"],
    properties: {
      name: {
        position: 1,
      },
      description: {
        position: 2,
      },
      quantity: {
        position: 3,
      },
      inStock: {
        position: 4,
      },
      Application: {
        position: 5,
      },

      MaxPressure: {
        position: 6,
      },

      price: {
        position: 7,
      },

      image: {
        isVisible: false,
        position: 8,
      },
      uploadImage: {
        isRequired: true,
        type: "mixed",
        isVisible: { list: true, edit: true, filter: false, show: false },
        components: {
          edit: Components.Edit,
          list: Components.List,
        },
      },
    },
    actions: {
      new: {
        before: [uploadBeforeHook],
        after: [uploadAfterHook],
      },
      edit: {
        before: [uploadBeforeHook],
        after: [uploadAfterHook],
      },
      show: {
        isVisible: false,
      },
    },
  },
};

