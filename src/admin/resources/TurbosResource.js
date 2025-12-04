import { Turbos } from "../../models/Turbos.js";
import { Components } from "../components/components.js";
import {
  uploadBeforeHook,
  uploadAfterHook,
} from "../actions/upload-image.hook.js";

export const TurbosResource = {
  resource: Turbos,
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
      Type: {
        position: 5,
      },
      Application: {
        position: 6,
      },
      MaxPower: {
        position: 7,
      },
      price: {
        position: 8,
      },
      image: {
        isVisible: false,
        position: 9,
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

// export const profisStudentResource = {
//   resource: profisStudent,
//   options: {
//     listProperties: ["id", "name"],
//     actions: {
//       downloadSingleCsv,
//       downloadAllCsvs,
//       downloadSelectedCsvs,

//       edit: {
//         // before: [pdfBeforeHook],
//         // after: [pdfAfterHook],
//         // isVisible: false,
//       },
//     },
//   },
// };
