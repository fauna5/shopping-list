import { shallowMount } from "@vue/test-utils";
import App from "./App";

describe("App", () => {
  it("should render", () => {
    const wrapper = shallowMount(App);
    expect(wrapper.element).toMatchSnapshot();
  });
});
