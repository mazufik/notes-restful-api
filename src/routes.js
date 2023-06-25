import {
  addNoteHandler,
  getAllNoteHandler,
  getNoteByIdHandler,
  updateNoteByIdHandler,
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
  {
    method: "PUT",
    path: "/api/notes/{id}",
    handler: updateNoteByIdHandler,
  },
];

export default routes;
