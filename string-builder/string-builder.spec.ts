import {StringBuilder} from "./string-builder";

describe('StringBuilder', () => {
  let sb: StringBuilder;

  beforeAll(async () => {
    sb = new StringBuilder();
  });
  it('get length', () => {
    expect(sb.length).toEqual(0);
  });

  test('append', () => {
    sb.append(true);
    sb.append('hah');
    sb.append(new StringBuilder('anotherSb'));
    sb.append(123);
    sb.append(['s', 'b']);
    console.log(sb);
    expect(sb.length).toEqual(6);
  });

  test('insert', () => {
    sb.append(['start', 'test', 'sb']);
    sb.insert(1, true);
    sb.insert(2, 'hah');
    sb.insert(3, new StringBuilder('anotherSb'));
    sb.insert(4, 123);
    sb.insert(5, ['s', 'b']);
    expect(sb.length).toEqual(9);
  });

  test('toString', () => {
    sb.append(['start', 'test', 'sb']);
    expect(sb.toString()).toEqual('starttestsb');
  });

  test('equals', () => {
    sb.append(['start', 'test', 'sb']);
    expect(sb.equals(new StringBuilder('starttestsb'))).toBeTruthy();
  });

  test('remove', () => {
    sb.append(['start', 'test', 'sb']);
    sb.remove(0, 1);
    expect(sb.equals(new StringBuilder('testsb'))).toBeTruthy();
  });

  test('replace', () => {
    sb.append(['start', 'test', 'sb']);
    console.log(sb);
    sb.replace('sb', 'string-builder');
    console.log(sb);
    expect(sb.equals(new StringBuilder('startteststring-builder'))).toBeTruthy();
  });

  test('clear', () => {
    sb.append(['start', 'test', 'sb']);
    sb.clear();
    expect(sb.length).toEqual(0);
  });

});