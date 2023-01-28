import { Body, Controller, Delete, Get, Path, Post, Put, Query, Route } from "tsoa";
import Note, { UnsavedNote } from "types/src/Note";
import { notesDao } from "../daos";

@Route("notes")
export class NotesController extends Controller {

  @Get()
  public async getNotes(): Promise<Note[]> {
    return notesDao.list();
  }

  /**
   * A very very very basic search. Doesn't tokenize. Case insensitive.
   *
   * @param query the query to search with
   * @minLength query 3
   * @maxLength query 22
   */
  @Get("/search")
  public async search(@Query("query") query: string): Promise<Note[]> {
    return notesDao.search(query);
  }

  @Get("{id}")
  public async findById(id: Note["id"]): Promise<Note | undefined> {
    return notesDao.findById(id);
  }

  @Post()
  public async createNote(
    @Body() requestBody: UnsavedNote
  ): Promise<Note> {
    return notesDao.add(requestBody);
  }

  @Put()
  public async updateNote(
    @Body() requestBody: Note
  ): Promise<boolean> {
    return notesDao.update(requestBody);
  }

  @Delete("{id}")
  public async deleteNote(@Path() id: number): Promise<boolean> {
    return notesDao.delete(id);
  }
}