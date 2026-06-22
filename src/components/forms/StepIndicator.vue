<template>
  <div class="step-indicator">
    <div class="steps-track">
      <div
        v-for="(step, index) in steps"
        :key="step.id"
        class="step-item"
        :class="{
          'is-active': index + 1 === currentStep,
          'is-completed': index + 1 < currentStep,
          'is-clickable': index + 1 < currentStep && clickable
        }"
        @click="handleStepClick(index + 1)"
      >
        <div class="step-marker">
          <span v-if="index + 1 > currentStep" class="step-number">{{ index + 1 }}</span>
          <svg v-else-if="index + 1 < currentStep" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
          <span v-else class="step-number">{{ index + 1 }}</span>
        </div>
        <div class="step-label">{{ step.label }}</div>
        <div v-if="index < steps.length - 1" class="step-connector"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  steps: {
    type: Array,
    required: true,
    validator: (value) => value.every(s => s.id && s.label)
  },
  currentStep: {
    type: Number,
    required: true,
    validator: (value) => value >= 1
  },
  clickable: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits(['step-click'])

function handleStepClick(step) {
  if (props.clickable && step < props.currentStep) {
    emit('step-click', step)
  }
}
</script>

<style scoped>
.step-indicator {
  padding: 20px 0 36px;
}
.steps-track {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 0;
}
.step-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  flex: 1;
  max-width: 180px;
}
.step-item.is-clickable {
  cursor: pointer;
}
.step-marker {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-mono);
  font-size: .875rem;
  font-weight: 700;
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;
  background: var(--surface);
  border: 2px solid var(--line);
  color: var(--text-muted);
}
.step-item.is-active .step-marker {
  background: var(--accent);
  border-color: var(--accent);
  color: var(--white);
  box-shadow: 0 0 0 4px rgba(201,168,76,0.2);
}
.step-item.is-completed .step-marker {
  background: var(--accent-dark);
  border-color: var(--accent-dark);
  color: var(--white);
}
.step-connector {
  position: absolute;
  top: 20px;
  left: calc(50% + 24px);
  width: calc(100% - 48px);
  height: 2px;
  background: var(--line);
}
.step-item.is-completed .step-connector {
  background: var(--accent-dark);
}
.step-label {
  margin-top: 10px;
  font-size: .75rem;
  font-weight: 500;
  color: var(--text-muted);
  text-align: center;
  transition: color 0.3s ease;
}
.step-item.is-active .step-label {
  color: var(--accent-dark);
  font-weight: 600;
}
.step-item.is-completed .step-label {
  color: var(--text-secondary);
}
.step-item.is-clickable:hover .step-marker {
  transform: scale(1.1);
}

@media (max-width: 600px) {
  .step-label {
    font-size: .65rem;
  }
  .step-marker {
    width: 32px;
    height: 32px;
    font-size: .75rem;
  }
  .step-connector {
    top: 16px;
    left: calc(50% + 20px);
    width: calc(100% - 40px);
  }
}
</style>