import { addNoteHandler, getAllNoteHandler } from "./handler.js";

const routes = [
  {
    method: "POST",
    path: "/api/notes",
    handler: addNoteHandler,
  },
  {
    method: "GET",
    path: "/api/notes",
    handler: getAllNoteHandler,
  },
];

export default routes;
