import { nanoid } from "nanoid";
import notes from "./notes.js";

const addNoteHandler = (request, h) => {
  const { title, tags, body } = request.payload;

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
    const response = h.response({
      code: 201,
      status: "success",
      message: "Note success to add",
      data: {
        notes,
      },
    });
    response.code(201);
    return response;
  }

  const response = h.response({
    code: 500,
    status: "fail",
    message: "Note failed to add",
  });
  response.code(500);
  return response;
};

export default addNoteHandler;
