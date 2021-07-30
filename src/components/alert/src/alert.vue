<template>
  <transition :name="transition">
    <div
      v-if="!closed"
      :class="[
                 `${classPrefix}`,
                 type && `${classPrefix}--${type}`,
                 isDescription && `${classPrefix}--with-des`,
                 showIcon && `${classPrefix}--with-icon`,
                 theme && `${classPrefix}--${theme}`
             ]"
    >
      <span :class="[`${classPrefix}__icon`]" v-if="showIcon">
        <slot name="icon"></slot>
      </span>
      <div :class="[`${classPrefix}__message`]">
        <slot></slot>
      </div>
      <div :class="[`${classPrefix}__description`]">
        <slot name="description"></slot>
      </div>
      <span :class="[`${classPrefix}__close`]" v-if="closable" @click="handlerClose">
        <slot name="close"></slot>
      </span>
    </div>
  </transition>
</template>

<script>
import Config from "/src/config";
export default {
  name: "Alter",
  props: {
    type: {
      type: String,
      default: "info",
      validator(value) {
        return ["success", "info", "warning", "error"].includes(value);
      },
    },
    transition: {
      type: String,
      default: "AlterFade",
    },
    showIcon: Boolean,
    closable: Boolean,
    theme: {
      type: String,
      default: "light",
      validator(value) {
        return ["light", "dark"].includes(value);
      },
    },
  },
  data() {
    return {
      classPrefix: Config.classPrefix + "-alter",
      closed: false,
    };
  },
  computed: {
    isDescription() {
      return this.$slots.description;
    },
  },
  components: {},
  methods: {
    handlerClose(event) {
      this.closed = true;
      this.$emit("close", event);
    },
  },
};
</script>
