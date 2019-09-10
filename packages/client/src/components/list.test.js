import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import createStore from '../store/store';

import List from './List';

const INIT_LIST = [
  {
    id: 0,
    title: 'eggs',
    complete: false,
  },
  {
    id: 1,
    title: 'milk',
    complete: true,
  },
  {
    id: 2,
    title: 'bread',
    complete: false,
  },
];


const localVue = createLocalVue();
localVue.use(Vuex);

describe('List', () => {
  it('renders', () => {
    const wrapper = shallowMount(List, {
      store: createStore(INIT_LIST),
      localVue,
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
