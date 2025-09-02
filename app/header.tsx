// 'use client'

// import Image from 'next/image'
// import Link from 'next/link'
// import { Download } from 'lucide-react'
// import { TextEffect } from '@/components/ui/text-effect'

// export function Header() {
//   return (
//     <header className="mb-8 pb-2">
//       {/* Mobile: one column, Photo -> Text; md+: Photo | Line | Text */}
//       <div className="grid grid-cols-1 md:grid-cols-[auto_min-content_1fr] gap-5 md:gap-7 items-start">
//         {/* Portrait column (left) with hover flip */}
//         <div className="relative w-full md:w-[10.5rem] lg:w-[12rem] aspect-[3/4] overflow-hidden perspective">
//           {/* 3D flip wrapper */}
//           <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d hover:rotate-y-180 motion-reduce:transition-none motion-reduce:hover:rotate-0 z-10">
//             {/* Front (default image) */}
//             <div className="absolute inset-0 backface-hidden">
//               <Image
//                 src="/portrait.jpg"
//                 alt="Portrait of Lorenz Kipp"
//                 fill
//                 priority
//                 sizes="(max-width: 639px) 100vw, (max-width: 1023px) 10.5rem, 12rem"
//                 className="object-cover"
//               />
//             </div>

//             {/* Back (hover image) */}
//             <div className="absolute inset-0 rotate-y-180 backface-hidden">
//               <div className="relative w-full h-full border border-zinc-500">
//                 <Image
//                   src="/scpo.jpg"
//                   alt="Sciences Po"
//                   fill
//                   sizes="(max-width: 639px) 100vw, (max-width: 1023px) 10.5rem, 12rem"
//                   className="object-cover"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* subtle animated frame, disabled for reduced motion */}
//           <div className="absolute inset-0 ring-1 ring-cyan-400/40 animate-pulse motion-reduce:animate-none pointer-events-none z-0" />
//         </div>

//         {/* Divider column (only on md+) */}
//         <div className="hidden md:block h-full w-px bg-zinc-200 dark:bg-zinc-800" />

//         {/* Text column (right) */}
//         <div className="flex flex-col justify-start md:pl-6 mt-4 md:mt-0">
//           <Link
//             href="/"
//             className="font-medium tracking-tight text-black dark:text-white hover:opacity-80 transition-opacity"
//           >
//             Lorenz Kipp
//           </Link>

//           <TextEffect
//             as="p"
//             preset="fade"
//             per="char"
//             delay={0.08}
//             className="mt-1 text-[0.92rem] text-zinc-600 dark:text-zinc-200"
//           >
//             PhD Student in Economics
//           </TextEffect>

//           <div className="mt-4 text-[0.85rem] text-zinc-500 dark:text-zinc-500">
//             <Link
//               href="https://www.sciencespo.fr/department-economics/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-black dark:hover:text-white transition-colors link-underline"
//             >
//               Department of Economics, Sciences Po
//             </Link>
//           </div>

//           <div className="mt-1 text-[0.85rem] text-zinc-500 dark:text-zinc-500">
//             <Link
//               href="https://maps.app.goo.gl/hBew3kcmw649qzCd6"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-black dark:hover:text-white transition-colors link-underline whitespace-normal"
//             >
//               28 Rue des Saints-Pères, 75007 Paris, France
//             </Link>
//           </div>

//           <div className="mt-4">
//             <Link
//               href="/cv.pdf"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center space-x-1 text-[0.82rem] text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
//             >
//               <Download className="h-4 w-4" />
//               <span>CV</span>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </header>
//   )
// }

// Previous versions without rotation / without picture

'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Download } from 'lucide-react'
import { TextEffect } from '@/components/ui/text-effect'

export function Header() {
  return (
    <header className="mb-8 pb-2">
      {/* Mobile: one column, Photo -> Text; md+: Photo | Line | Text */}
      <div className="grid grid-cols-1 md:grid-cols-[auto_min-content_1fr] gap-5 md:gap-7 items-start">
        {/* Portrait column (left) */}
        <div className="relative w-full md:w-[10.5rem] lg:w-[12rem] aspect-[3/4] overflow-hidden">
          <Image
            src="/portrait.jpg"
            alt="Portrait of Lorenz Kipp"
            fill
            priority
            sizes="(max-width: 639px) 100vw, (max-width: 1023px) 10.5rem, 12rem"
            className="object-cover"
          />
          {/* subtle animated frame, disabled for reduced motion */}
          <div className="absolute inset-0 ring-1 ring-cyan-400/40 animate-pulse motion-reduce:animate-none pointer-events-none" />
        </div>

        {/* Divider column (only on md+) */}
        <div className="hidden md:block h-full w-px bg-zinc-200 dark:bg-zinc-800" />

        {/* Text column (right) */}
        <div className="flex flex-col justify-start md:pl-6 mt-4 md:mt-0">
          <Link
            href="/"
            className="font-medium tracking-tight text-black dark:text-white hover:opacity-80 transition-opacity"
          >
            Lorenz Kipp
          </Link>

          <TextEffect
            as="p"
            preset="fade"
            per="char"
            delay={0.08}
            className="mt-1 text-[0.92rem] text-zinc-600 dark:text-zinc-200"
          >
            PhD Student in Economics
          </TextEffect>

          <div className="mt-4 text-[0.85rem] text-zinc-500 dark:text-zinc-500">
            <Link
              href="https://www.sciencespo.fr/department-economics/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black dark:hover:text-white transition-colors link-underline"
            >
              Department of Economics, Sciences Po
            </Link>
          </div>

          <div className="mt-1 text-[0.85rem] text-zinc-500 dark:text-zinc-500">
            <Link
              href="https://maps.app.goo.gl/hBew3kcmw649qzCd6"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black dark:hover:text-white transition-colors link-underline whitespace-normal"
            >
              28 Rue des Saints-Pères, 75007 Paris, France
            </Link>
          </div>

          <div className="mt-4">
            <Link
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-[0.82rem] text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
            >
              <Download className="h-4 w-4" />
              <span>CV</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}




// 'use client'
// import { TextEffect } from '@/components/ui/text-effect'
// import Link from 'next/link'
// import { MapPin, FileSignature, Download } from 'lucide-react'

// export function Header() {
//   return (
//     <header className="mb-8 pb-2">
//       {/* Name and CV link */}
//       <div className="flex items-center justify-between">
//         <Link
//           href="/"
//           className="font-medium text-black dark:text-white hover:opacity-80 transition-opacity"
//         >
//           Lorenz Kipp
//         </Link>


//         {/* ---- CV Option 2: Icon + Text ---- */}
//       <Link
//         href="/cv.pdf"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="ml-2 flex items-center space-x-1 text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
//       >
//         <Download className="h-4 w-4" />
//         <span className="text-[0.82rem]">CV</span>
//       </Link>

//       </div>

//       {/* Subtitle */}
//       <TextEffect
//         as="p"
//         preset="fade"
//         per="char"
//         delay={0.1}
//         className="mt-0.5 text-[0.9rem] text-zinc-600 dark:text-zinc-200"
//       >
//         PhD Student in Economics
//       </TextEffect>

//       {/* Dept + school link */}
//       <div className="mt-5 text-[0.85rem] text-zinc-500 dark:text-zinc-500">
//         <Link
//           href="https://www.sciencespo.fr/department-economics/"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="hover:text-black dark:hover:text-white transition-colors link-underline"
//         >
//           Department of Economics, Sciences Po
//         </Link>
//       </div>

//       {/* Address */}
//       <div className="flex items-center space-x-1 text-[0.85rem] text-zinc-500 dark:text-zinc-500">
//         {/* <MapPin className="h-4 w-4 text-zinc-500 dark:text-zinc-400" /> */}
//         <Link
//           href="https://www.google.com/maps/place/Sciences+Po+Department+of+Economics/@48.8555759,2.3259664,16z/data=!3m2!4b1!5s0x47e66e264bffb59f:0x36a53f06abf1325b!4m6!3m5!1s0x47e671d7ce624ac1:0x8b233522a7fb3eee!8m2!3d48.855576!4d2.3308373!16s%2Fg%2F11b7jhmsy3?entry=ttu"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="hover:text-black dark:hover:text-white transition-colors link-underline whitespace-normal"
//         >
//           28 Rue des Saints‑Pères, 75007 Paris, France
//         </Link>
//       </div>
//     </header>
//   )
// }

















