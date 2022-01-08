export class StringBuilder {
  private _inner: Array<string>;

  constructor();
  constructor(value: string);
  constructor(value: number);
  constructor(value: boolean);
  constructor(value: string[]);
  constructor(value: StringBuilder);
  constructor(value?: string | number | boolean | string[] | StringBuilder) {
    if (typeof value === 'string') {
      this._inner = [value];
    } else if (value instanceof Array) {
      this._inner = value;
    } else if (value instanceof StringBuilder) {
      this._inner = value._inner;
    } else if (value) {
      this._inner = [value.toString()];
    } else {
      this._inner = [];
    }
  }

  get length() {
    return this._inner.length;
  }

  append(value: string): void;
  append(value: number): void;
  append(value: boolean): void;
  append(value: string[]): void;
  append(value: StringBuilder): void;
  append(value: string | number | boolean | string[] | StringBuilder): void {
    if (typeof value === 'string') {
      this._inner.push(value);
    } else if (value instanceof Array) {
      this._inner.push(...value);
    } else if (value instanceof StringBuilder) {
      this._inner.push(...value._inner);
    } else {
      this._inner.push(value.toString());
    }
  }

  insert(index: number, value: string): void;
  insert(index: number, value: number): void;
  insert(index: number, value: boolean): void;
  insert(index: number, value: string[]): void;
  insert(index: number, value: StringBuilder): void;
  insert(index: number, value: string | number | boolean | string[] | StringBuilder): void {
    if (typeof value === 'string') {
      this._inner.splice(index, 0, value);
    } else if (value instanceof Array) {
      this._inner.splice(index, 0, ...value);
    } else if (value instanceof StringBuilder) {
      this._inner.splice(index, 0, ...value._inner);
    } else {
      this._inner.splice(index, 0, value.toString());
    }
  }

  clear() {
    this._inner = [];
  }

  remove(start: number, length: number) {
    this._inner.splice(start, length);
  }

  replace(substr: string, replacement: string) {
    this._inner = this._inner.map(s => s === substr ? replacement : s);
  }

  toString() {
    return this._inner.join('');
  }

  equals(value: StringBuilder) {
    return this.toString() === value.toString();
  }
}