<template>
  <button
    @click="handleClick"
    :disabled="disabled"
    :class="[
                `${classPrefix}`,
                type && `${classPrefix}--type-${type}`,
                size && `${classPrefix}--size-${size}`,
                block && `${classPrefix}--block`,
                circle && `${classPrefix}--circle`,
                circle && !onlyIconCircle && `${classPrefix}--circle-text`,
                {
                    'is-disabled': disabled,
                    'is-loading': loading
                }
            ]"
  >
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script>
import Config from "/src/config";
export default {
  name: "Button",
  props: {
    disabled: Boolean,
    type: {
      type: String,
      default: "default",
      validator(value) {
        return [
          "primary",
          "default",
          "warning",
          "danger",
          "success",
          "info",
          "text",
        ].includes(value);
      },
    },
    size: {
      type: String,
      default() {
        return "default";
      },
      validator(value) {
        return ["mini", "small", "default", "large"].includes(value);
      },
    },
    block: Boolean,
    loading: Boolean,
    circle: Boolean,
  },
  data() {
    return {
      classPrefix: Config.classPrefix + "-button",
      onlyIconCircle: true,
    };
  },
  computed: {},
  components: {},
  mounted() {
    this.$nextTick(() => {
      this.isOnlyIconCircle();
    });
  },
  methods: {
    isOnlyIconCircle() {
      const slotDefault = this.$slots.default;
      if (slotDefault) {
        slotDefault.forEach((item) => {
          if (item.text) {
            this.onlyIconCircle = false;
          }
        });
      }
    },
    handleClick(event) {
      if (this.disabled || this.loading) return;
      this.$emit("click", event);
    },
  },
};
</script>
