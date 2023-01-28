import {
  Body,
  Controller,
  Get,
  Path,
  Post,
  Query,
  Route,
  SuccessResponse,
} from "tsoa";
import Note from "types/src/Note"
import NotesDao from "../daos/NotesDao";

@Route("notes")
export class NotesController extends Controller {

  private notesDao: NotesDao;

  public constructor() {
    super();

    this.notesDao = new NotesDao();
    this.notesDao.add({
      message: "howdy doody"
    })
  }

  @Get()
  public async getNotes(): Promise<Note[]> {
    return this.notesDao.list();
  }
}