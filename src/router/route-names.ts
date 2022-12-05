import { contactRouteNames } from '@/views/contacts/contacts.routes'
import { JobOpeningsRouteNames } from '@/views/job-openings/job-openings.routes'

export const routeNames = {
  ...contactRouteNames,
  ...JobOpeningsRouteNames
}
