import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import createStore from '../store/store';

import ListItem from './ListItem';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('ListItem', () => {
  it('renders', () => {
    const wrapper = shallowMount(ListItem, {
      store: createStore(),
      propsData: {
        id: 2,
        title: 'bread',
        complete: false,
      },
      localVue,
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  it('renders with strikethrough when complete', () => {
    const wrapper = shallowMount(ListItem, {
      store: createStore(),
      propsData: {
        id: 2,
        title: 'bread',
        complete: true,
      },
      localVue,
    });
    expect(wrapper.find('h2').classes()).toContain('strikethrough');
  });

  it('should dispatch item update on click', () => {
    const updateMutation = jest.fn();

    const wrapper = shallowMount(ListItem, {
      store: new Vuex.Store({
        actions: { UPDATE: updateMutation },
      }),
      propsData: {
        id: 2,
        title: 'bread',
        complete: false,
      },
      localVue,
    });
    const checkbox = wrapper.find('input');
    checkbox.trigger('click');
    expect(updateMutation).toHaveBeenCalledWith(expect.anything(), { complete: true, id: 2 }, undefined);
  });
});
