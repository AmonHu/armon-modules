export class Queue<T> {
  private _store: Array<T>;

  constructor() {
    this._store = new Array<T>();
  }

  * [Symbol.iterator]() {
    yield* this._store;
  }

  get count() {
    return this._store.length;
  }

  clear() {
    this._store = [];
  }

  contains(item: T) {
    return this._store.includes(item);
  }

  dequeue() {
    if (this.count <= 0) {
      throw 'the queue is empty.';
    }
    return this._store.pop();
  }

  enqueue(item: T) {
    this._store.push(item);
  }

  peek() {
    if (this.count <= 0) {
      throw 'the queue is empty.';
    }
    return this._store[this._store.length - 1];
  }

  toArray() {
    return Array.from(this);
  }

  toString() {
    return this._store.join();
  }
}