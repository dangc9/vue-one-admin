import { ref, computed } from 'vue';

const login = {
  type: 'LOGIN'
}
const currentType = ref(login.type);

export function setLoginType(type) {
  currentType.value = type;
}
export const getLoginType = computed(() => currentType.value)
