import { urlForImage } from 'studio/lib/sanity.image'
import type { Author } from 'studio/lib/sanity.queries'
import Image from 'next/image'

export default function AuthorAvatar(props: Author) {
  const { name, picture } = props
  return (
    <div className="flex items-center ">
      <div className="relative h-12 w-12 ">
        <Image
          src={
            picture?.asset?._ref
              ? urlForImage(picture).height(96).width(96).fit('crop').url()
              : 'https://source.unsplash.com/96x96/?face'
          }
          className=""
          height={110}
          width={110}
          // @TODO add alternative text to avatar image schema
          alt=""
        />
      </div>
      <div className="text-xl tracking-wide font-light ml-2 p-2 border-emerald-300 border-2 text-slate-600">{name}</div>
    </div>
  )
}
