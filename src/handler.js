import { nanoid } from "nanoid";
import notes from "./notes.js";

const addNoteHandler = ({ payload }, h) => {
  const { title, tags, body } = payload;
  const id = nanoid(16);
  const createdAt = new Date().toISOString();
  const updatedAt = createdAt;

  const newNote = {
    title,
    tags,
    body,
    id,
    createdAt,
    updatedAt,
  };

  notes.push(newNote);

  const isSuccess = notes.filter((note) => note.id === id).length > 0;

  if (isSuccess) {
    return h.response({
      code: 201,
      status: "success",
      message: "Note success to add",
      data: {
        notes,
      },
    }).code(201);
  }

  return response({
    code: 500,
    status: "fail",
    message: "Note failed to add",
  }).code(500);
};

const getAllNoteHandler = () => ({
  code: 200,
  status: "OK",
  message: "List notes",
  data: {
    notes,
  },
});

const getNoteByIdHandler = ({ params }, h) => {
  const { id } = params;
  const note = notes.filter((note) => note.id === id)[0];
  if (note !== undefined) {
    return {
      code: 200,
      status: "OK",
      message: "Note is found",
      data: {
        note,
      },
    };
  }

  return h.response({
    code: 404,
    status: "fail",
    message: "Note not found",
  }).code(404);
};

export { addNoteHandler, getAllNoteHandler, getNoteByIdHandler };
