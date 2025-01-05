import { Metadata } from 'next'
import PageData from './pageData'

export const metadata: Metadata = {
  title: 'Nafis Mahmud Ayon | Projects',
  description: 'Check out my projects',
}

const page = () => {
  return (
    <PageData />
  )
}

export default page