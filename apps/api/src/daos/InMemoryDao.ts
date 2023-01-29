import _ from 'lodash';
import Model from 'types/src/Model';

/**
 * A basic "in memory" DAO used for scaffolding testing apis.
 *
 * We use a list as a backing store and provide simple CRUD.
 */
export default class InMemoryDao<T extends Model> {
  protected data: T[];

  public constructor() {
    this.data = [];
  }

  list(): T[] {
    return this.data;
  }

  findById(id: Model['id']): T | undefined {
    return this.data.find((d) => d.id === id);
  }

  add(unsaved: T): T {
    const maxTuple = _.maxBy(this.data, (d) => d.id);
    const saved = { ...unsaved, id: (maxTuple?.id ?? 0) + 1 };

    this.data = [...this.data, saved];

    return saved;
  }

  update(note: T): boolean {
    const found = this.findById(note.id);

    this.data = [...this.data.filter((d) => d.id !== note.id), note];

    return !!found;
  }

  delete(id: number): boolean {
    const found = this.data.find((d) => d.id === id);

    this.data = this.data.filter((d) => d.id !== id);

    return !!found;
  }
}
