<template>
  <div class="flex mb-5">
    <AppButton
      @click="openContactsLink"
    >
      Contacts
    </AppButton>
    <AppButton
      class="ml-5"
      @click="openJobsOpeningsLink"
    >
      Job openings
    </AppButton>
  </div>
</template>

<script lang="ts" setup>
const router = useRouter()
const { $routeNames } = useGlobalProperties()

function openContactsLink () {
  router.push({ name: $routeNames.contacts })
}
function openJobsOpeningsLink () {
  router.push({ name: $routeNames.jobOpenings })
}
</script>
