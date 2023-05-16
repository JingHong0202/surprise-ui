import { describe, it, expect } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import { SuButton } from '@ui/index';

describe('Button normalize', () => {
  it('render content', () => {
    const wrapper_slots = shallowMount(SuButton, {
      slots: { default: 'button' },
      props: { label: 'button' }
    });
    expect(wrapper_slots.text()).toEqual('button');

    const wrapper_label = shallowMount(SuButton, {
      props: { label: 'button' }
    });
    expect(wrapper_label.text()).toEqual('button');
  });
});
