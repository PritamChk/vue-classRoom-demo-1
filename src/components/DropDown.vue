<template>
  <div class="w-10 h-10 text-blue mx-auto">
    <HandIcon />
    <ChevronDoubleDownIcon class="w-40 h-40 text-blue-500" />
    <AnnotationIcon class="w-10 h-10 text-fuchsia-400" />
  </div>
  <kinesis-container class="absolute top-52 left-44">
    <kinesis-element
      easing
      class="w-40 h-40"
      tag="img"
      :src="img"
      :alt="'No Image Found'"
      :strength="-10"
      type="rotate"
      transform-origin="50% 130%"
      axis="x"
    />
  </kinesis-container>
</template>

<script>
import {
  HandIcon,
  ChevronDoubleDownIcon,
  AnnotationIcon,
} from "@heroicons/vue/outline";
export default {
  name: "DropDown",
  components: {
    HandIcon,
    AnnotationIcon,
    ChevronDoubleDownIcon,
  },
  data() {
    return {
      img: '../../src/assets/component_imgs/ColorPallet.svg'
    };
  },
};
</script>
