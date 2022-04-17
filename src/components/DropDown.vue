<template>
  <div class="w-10 h-10 text-blue">
    <HandIcon />
  </div>
  <ChevronDoubleDownIcon class="w-10 h-10 text-blue-500" />
  <AnnotationIcon class="w-10 h-10 text-fuchsia-400" />
</template>

<script>
import { HandIcon, 
ChevronDoubleDownIcon,
AnnotationIcon
} from "@heroicons/vue/outline";
export default {
  name: "DropDown",
  components: {
    HandIcon,
    AnnotationIcon,
    ChevronDoubleDownIcon,
  },
};
</script>
