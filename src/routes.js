import {
  addNoteHandler,
  getAllNoteHandler,
  getNoteByIdHandler,
} from "./handler.js";

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
  {
    method: "GET",
    path: "/api/notes/{id}",
    handler: getNoteByIdHandler,
  },
];

export default routes;
