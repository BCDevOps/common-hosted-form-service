import { cloneDeep } from 'lodash';

import store from '@/store/modules/admin';

describe('admin mutations', () => {
  let state;

  beforeEach(() => {
    state = cloneDeep(store.state);
  });

  it('SET_FORM should update form state', () => {
    const obj = { foo: 'bar' };
    store.mutations.SET_FORM(state, obj);

    expect(state.form).toBeTruthy();
    expect(state.form).toEqual(expect.objectContaining(obj));
  });

  it('SET_FORMLIST should update formList state', () => {
    const obj = { foo: 'bar' };
    store.mutations.SET_FORMLIST(state, [obj]);

    expect(state.formList).toBeTruthy();
    expect(state.formList).toHaveLength(1);
    expect(state.formList).toEqual(expect.arrayContaining([expect.objectContaining(obj)]));
  });

  it('SET_USER should update form state', () => {
    const obj = { foo: 'bar' };
    store.mutations.SET_USER(state, obj);

    expect(state.user).toBeTruthy();
    expect(state.user).toEqual(expect.objectContaining(obj));
  });

  it('SET_USERLIST should update formList state', () => {
    const obj = { foo: 'bar' };
    store.mutations.SET_USERLIST(state, [obj]);

    expect(state.userList).toBeTruthy();
    expect(state.userList).toHaveLength(1);
    expect(state.userList).toEqual(expect.arrayContaining([expect.objectContaining(obj)]));
  });
});
