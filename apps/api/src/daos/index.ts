import NotesDao from './NotesDao';

const notesDao = new NotesDao();
notesDao.add({ message: "Howdy doody! This is a standard issue note. First one's free." });
notesDao.add({ message: "Also, the second one is free. I'm generous like that" });

export { notesDao };
