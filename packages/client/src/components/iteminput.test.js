import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import createStore from '../store/store';

import ItemInput from './ItemInput';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('ItemInput', () => {
  it('renders', () => {
    const wrapper = shallowMount(ItemInput);
    expect(wrapper.element).toMatchSnapshot();
  });

  it('should dispatch item add on click', () => {
    const add = jest.fn();

    const wrapper = shallowMount(ItemInput, {
      store: new Vuex.Store({
        actions: { ADD: add },
      }),
      localVue,
    });
    const input = wrapper.find('input');
    input.setValue('new');
    input.trigger('keyup', { code: 'Enter' });
    expect(add).toHaveBeenCalledWith(expect.anything(), 'new', undefined);
  });
});
