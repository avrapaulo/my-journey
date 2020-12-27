interface IJobs {
  start: string
  end?: string
  company: string
  title: string
  description: string
}

export const JOBS_LIST: IJobs[] = [
  {
    start: '2020/03',
    company: 'Moteefe',
    title: 'Software Engineer',
    description:
      'In my first team we had the mission to increase the conversion rate of the platform and provide the best checkout experience to the user. Later, I decided to switch to a new team that was being created at the time, whose goal was to remove the front-end code from the back-end monolith Ruby with Rails to Next.js.'
  },
  {
    start: '2019/08',
    end: '2020/03',
    company: 'Talkdesk',
    title: 'Software Engineer',
    description:
      'Create responsive, maintainable and scalable applications via React, Redux to guarantee a topnotch and consistent UX. To be used by users of the main application as an installable extension to improve user experience and satisfaction.'
  }
]
