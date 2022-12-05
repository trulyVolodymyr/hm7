import type { RouteRecordRaw } from 'vue-router'

import JobOpenings from '@/views/job-openings/JobOpenings.vue'

export const JobOpeningsRouteNames = {
  jobOpenings: 'job-openings'
}

export const JobOpeningsRoutes: RouteRecordRaw[] = [
  {
    path: '/job-openings',
    name: JobOpeningsRouteNames.jobOpenings,
    component: JobOpenings
  }

]
