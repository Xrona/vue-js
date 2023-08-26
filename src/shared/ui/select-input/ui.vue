<script setup lang="ts">
import styles from './styles.module.scss'
import { computed, ref, toRefs } from 'vue'
import ClickOutside from '@/shared/helpers/ClickOutside.vue'
import CloseIcon from '@/shared/assets/icons/close-icon.vue'
import { LoadingSpinner } from '@/shared/ui'

type Option = {
  name: string
  value: string
}

type Props = {
  label: string
  modelValue: string
  options?: Option[]
}

const props = defineProps<Props>()
const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const { label, modelValue, options } = toRefs<Props>(props)

const isOpen = ref(false)

const computedModel = computed({
  get: () => modelValue.value,
  set(value) {
    emit('update:modelValue', value)
  }
})

const computedName = computed(() => {
  const option = options?.value?.find(option => option.value === modelValue.value)

  return option?.name ?? ''
})
const computedIsOpen = computed(() => computedModel.value || isOpen.value)
const selectRef = ref<HTMLLabelElement>()

const clearHandler = () => {
  computedModel.value = ''
}

const clickHandler = (value: string) => {
  computedModel.value = value
  isOpen.value = false
}
</script>

<template>
  <click-outside :ref-object="selectRef" :on-handler="() => (isOpen = false)">
    <div :class="styles.inputGroup">
      <fieldset :class="[styles.container, { [styles.focus]: computedIsOpen }]">
        <label :class="styles.label" @click="isOpen = true">
          <select :class="styles.select" ref="selectRef">
            <template v-for="option in options" :key="option.value">
              <option :selected="option.value === computedModel" :value="option.value">
                {{ option.name }}
              </option>
            </template>
          </select>
          <span :class="styles.placeholder">{{ label }}</span>
        </label>
        <span :class="styles.name">{{ computedName }}</span>
        <button :class="styles.clear" v-show="computedModel" @click="clearHandler">
          <close-icon />
        </button>
        <Transition name="select-down">
          <div v-show="isOpen" :class="styles.dropdownContainer">
            <loading-spinner v-if="!options" />
            <Transition name="select-right">
              <ul :class="styles.dropdown" v-if="options">
                <li :class="styles.option" v-for="option in options" :key="option.value">
                  <button :class="styles.optionBtn" @click.stop="clickHandler(option.value)">
                    {{ option.name }}
                  </button>
                </li>
              </ul>
            </Transition>
          </div>
        </Transition>
      </fieldset>
    </div>
  </click-outside>
</template>
