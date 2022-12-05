<template>
  <div
    v-for="job in showMore ? jobDepartment.jobOpenings : jobDepartment.jobOpenings.slice(0, 5)"
    :key="job.id"
  >
    <a :href="job.url">
      <p
        class="ml-4 mb-1 text-[13px] hover:shadow rounded
             w-[max-content] hover:transition-all  hover:text-blue-500 max-w-[300px]"
      >
        - {{ job.title }}
      </p>
    </a>
  </div>
  <button
    v-if="(!showMore && jobDepartment.length>5)"
    class="ml-4 mb-4  text-blue-500 text-sm shadow pl-1 py-1  pr-3 rounded
             w-[max-content] cursor-pointer "
    @click="toggleShowMore"
  >
    - See more
  </button>

  <button
    v-if="(showMore && jobDepartment.length>5)"
    class="ml-4 mb-4  text-blue-500 text-sm shadow pl-1 py-1  pr-3 rounded
             w-[max-content] cursor-pointer "
    @click="toggleShowMore"
  >
    - See less
  </button>
</template>
<script lang="ts" setup>
import type { IJobOpening } from '@/_homework/job-openings'

const showMore = ref(false)

function toggleShowMore () {
  showMore.value = !showMore.value
}

defineProps<{
  jobDepartment: {
    department: string
    jobOpenings: IJobOpening[]
    length: number
  }
}>()
</script>
