import { code, poppins } from '@/app/fonts';
import BlogNav from '@/components/BlogNav';
import Footer from '@/components/Footer/Footer';
import NavBar from '@/components/NavBar';
import PageTitle from '@/components/PageTitle';
import data from '@/public/project-data.json';
import { Breadcrumb, BreadcrumbItem } from 'aspect-ui/Breadcrumb';
import "highlight.js/styles/atom-one-dark.css";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from 'rehype-highlight';

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const getData = data.filter((item) => item.slug === slug);

  return (
    <main className="w-full overflow-hidden cursor-none">
      <div
        id="home"
        className="mx-auto mt-4 w-full rounded-t-3xl background bg-[#f1f6fb] pb-12 pt-6 shadow shadow-normalText/25 drop-shadow-md backdrop-blur-3xl dark:bg-[#262626] lg:max-w-[1440px]"
      >
        <NavBar />
        <PageTitle
          title={getData[0].title}
          className="text-wrap px-3 flex justify-center w-full text-2xl"
        />
      </div>
      <div className="mx-auto mb-4 max-w-[1440px] px-3 md:px-4 lg:px-10 rounded-b-3xl bg-[#f1f6fa] shadow shadow-normalText/25 drop-shadow-md backdrop-blur-3xl dark:bg-[#272727]">
        <Breadcrumb className="py-10 px-0 flex-wrap gap-2 md:gap-3 " separatorClassName="">
          <BreadcrumbItem>
            <a href="/">Home</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="/projects">Projects</a>
          </BreadcrumbItem>
          <BreadcrumbItem className="">{getData[0].title}</BreadcrumbItem>
        </Breadcrumb>

        <ReactMarkdown
          className={`blog ${code.variable} ${poppins.variable} mb-4 md:mb-6 lg:mb-10`}
          rehypePlugins={[rehypeHighlight]}
        >
          {getData[0].blog}
        </ReactMarkdown>
        <BlogNav id={getData[0].id} />
        <Footer />
      </div>
    </main>
  );
}
