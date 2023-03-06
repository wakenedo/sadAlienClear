import type { Project } from 'studio/lib/sanity.queries'
import Link from 'next/link'
import ProjectDate from '../ActiveProjectPage/ProjectDate'
import 'components/Blog/BlogPostPreviewText.module.css'
import ProjectsPageCategory from '../ProjectsPage/ProjectsPageCategory'
import ProjectsPageCoverImages from '../ProjectsPage/ProjectsPageCoverImages'




export default function ProjectsPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  projectCategory,
}: Omit<Project, '_id'>) {


  return (
    <div className="flex mb-10  bg-repeat-round bg-contain bg-[url(https://www.imagemhost.com.br/images/2023/02/02/protruding-squares.png)] shadow-sm">
      <div className="w-[36rem] ">
        <div className="flex-col">
          <div className="flex">
            <div className=" border-r-2 ">
              <ProjectsPageCoverImages
                slug={slug}
                title={title}
                image={coverImage}
                priority={false}
              />
            </div>

            <div className=" mt-[253.5px] flex flex-wrap absolute rounded ">
              {projectCategory && <ProjectsPageCategory name={projectCategory.name} description={projectCategory.description} color={projectCategory.color} />}
            </div>
          </div>

        </div>
      </div>
      <div className="flex-col max-w-4xl ">
        <div className="flex justify-between lg:min-w-[680px] items-center mb-3 mt-1 px-4 pt-2">
          <div className="bg-[#FDFFA6] shadow-sm">
            <h3 className=" text-2xl font-semibold tracking-tight uppercase text-sky-900 p-0.5">
              <Link href={`/project/${slug}`} className="px-2 hover:text-[#FDFFA6] hover:bg-[#6590FF]">
                {title}
              </Link>
            </h3>
          </div>
          <div className="text-xs m-0.5 font-light tracking-tight italic text-justify text-sky-900 bg-[#FDFFA6] p-2 shadow-sm">
            <ProjectDate dateString={date} />
          </div>
        </div>
        <div className="overflow-visible text-ellipsis bg-[#6590FF] bg-opacity-90 h-auto lg:min-h-[215px] ">
          {excerpt && <p className="mb-4 px-4 py-0.5 text-base leading-relaxed font-normal tracking-wide text-justify text-[#FDFFA6] ">{excerpt}</p>}
        </div>


      </div>
      {/*<div className="flex justify-between">
        {author && <BlogAuthorAvatar name={author.name} picture={author.picture} />}
      </div>*/}
    </div>
  )
}