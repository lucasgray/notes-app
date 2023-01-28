import _ from 'lodash'
import Model from "types/src/Model";

export default class InMemoryDao<T extends Model> {

  private data: T[];

  public constructor() {
    this.data = [];
  }

  list(): T[] {
    return this.data;
  }

  findById(id: Model['id']): T | undefined {
    return this.data.find(d => d.id === id);
  }

  add(unsaved: T): T {

    const maxTuple = _.maxBy(this.data, d => d.id);
    const saved = {...unsaved, id: (maxTuple?.id ?? 0) + 1};

    this.data = [...this.data, saved];

    return saved;
  }

  delete(id: number): boolean {

    const found = this.data.find(d => d.id === id);

    this.data = this.data.filter(d => d.id !== id);

    return !!found;
  }

}