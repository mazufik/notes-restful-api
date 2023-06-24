import addNoteHandler from "./handler.js";

const routes = [
  {
    method: "POST",
    path: "/api/notes",
    handler: addNoteHandler,
  },
];

export default routes;
