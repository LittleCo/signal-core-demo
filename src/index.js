import { signal, computed, effect } from "@preact/signals-core";

const firstName = signal("a");
const lastName = signal("b");
const showFullName = signal(true);

const displayName = computed(() => {
  if (!showFullName.value) return firstName.value;
  return `${firstName.value} ${lastName.value}`
});

effect(() => console.log("名称：", displayName.value));
// a b
showFullName.value = false;
// a
lastName.value = 'c';
// nothging change
showFullName.value = true;
// a c
