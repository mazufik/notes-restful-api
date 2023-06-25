import {
  addNoteHandler,
  deleteNoteByIdHandler,
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
  {
    method: "DELETE",
    path: "/api/notes/{id}",
    handler: deleteNoteByIdHandler,
  },
];

export default routes;
