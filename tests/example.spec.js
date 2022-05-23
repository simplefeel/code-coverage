import { shallowMount } from "@vue/test-utils";
import HelloWorld from "../src/components/HelloWorld.vue";

describe("App.vue", () => {
  it("renders props.msg when passed", () => {
    const message = "hello world";
    const wrapper = shallowMount(HelloWorld, {
      propsData: { message },
    });
    expect(wrapper.text()).toMatch(message);
  });
});
