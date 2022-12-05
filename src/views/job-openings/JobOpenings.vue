<template>
  <div>
    <h2 class="font-bold text-blue-500 mb-3 uppercase">Job Openings</h2>

    <div class="my-4 mr-4">
      <el-select
        v-model="selectedDepartmetns"
        multiple
        collapse-tags
        placeholder="Select"
        style="width: 240px"
      >
        <el-option
          v-for="department in allDepartments"
          :key="department.value"
          :value="department.name"
        />
      </el-select>
    </div>

    <p>
      Showing
      <span
        v-if="selectedDepartmetns"
      >
        {{ numberOfShowedJobs }} out of
      </span>
      1458  job openings
    </p>

    <div />
    <div
      v-for=" jobDepartment, index in filterJobOpenings"
      :key="index"
      class="shadow w-[400px] bg-white rounded"
    >
      <div
        v-if="jobDepartment.length"
        class="my-5 px-3 py-2 rounded"
      >
        <p
          class=" font-bold text-blue-500 mb-4"
        >
          {{ jobDepartment.department }} ({{ jobDepartment.length }})
        </p>

        <DepartmentCard :jobDepartment="jobDepartment" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { jobOpenings, type IJobOpening } from '@/_homework/job-openings'
import { departments } from '@/_homework/departments'

import DepartmentCard from './components/DepartmentCard.vue'

/// Selected departments from input
const selectedDepartmetns = ref<[]>([])

/// Transform original array to show department and job offers
const transformedArray = computed(() => {
  /// Jobs w/o departments
  const otherArr = []
  for (let i = 0; i < jobOpenings.length; i++) {
    if (jobOpenings[i].departments.length < 1) {
      otherArr.push(jobOpenings[i])
    }
  }
  const otherObj = {
    department: 'Other',
    jobOpenings: otherArr,
    length: otherArr.length
  }

  /// Jobs woth departments
  const jobsWithDep = departments.map(el => [el.name,
    jobOpenings.filter(job => job.departments.some(r => el.value.includes(r)))]).map(x => ({
    department: x[0] as string,
    jobOpenings: x[1] as IJobOpening[],
    length: x[1].length as number
  }))

  return [...jobsWithDep, otherObj]
})

/// All departments w/o epmty
const allDepartments = computed(() => {
  const allDepArr = []
  const allDepObjArr = transformedArray.value.filter(el => {
    if (el.jobOpenings.length > 0) {
      return el.department
    }
  }).map(el => el.department)

  for (let i = 0; i < allDepObjArr.length; i++) {
    allDepArr.push({
      name: allDepObjArr[i],
      value: allDepObjArr[i].toLowerCase()
    })
  }
  return allDepArr
})

/// Filtered departments and jobs base on input value
const filterJobOpenings = computed(() => {
  if (selectedDepartmetns.value.length <= 0) {
    return transformedArray.value
  } else {
    return transformedArray.value.filter(job => selectedDepartmetns.value.some(r => job.department.includes(r)))
  }
})

/// Number of showed jobs
const numberOfShowedJobs = computed(() => {
  let numberOfJobs = 0
  for (let i = 0; i < filterJobOpenings.value.length; i++) {
    filterJobOpenings.value[i].jobOpenings.forEach(() => numberOfJobs++)
  }
  return numberOfJobs
})

</script>
