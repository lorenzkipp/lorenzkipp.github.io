'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Download } from 'lucide-react'
import { TextEffect } from '@/components/ui/text-effect'

export function Header() {
  return (
    <header className="mb-8 pb-2">
      {/* Mobile: column; md+: row with photo on the right */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-5 md:gap-7">
        {/* Text column */}
        <div className="flex-1 min-w-0">
          {/* Name */}
          <Link
            href="/"
            className="font-medium tracking-tight text-black dark:text-white hover:opacity-80 transition-opacity"
          >
            Lorenz Kipp
          </Link>

          {/* Subtitle */}
          <TextEffect
            as="p"
            preset="fade"
            per="char"
            delay={0.08}
            className="mt-1 text-[0.92rem] text-zinc-600 dark:text-zinc-200"
          >
            PhD Student in Economics
          </TextEffect>

          {/* Dept + school link */}
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

          {/* Address */}
          <div className="mt-1 text-[0.85rem] text-zinc-500 dark:text-zinc-500">
            <Link
              href="https://www.google.com/maps/place/Sciences+Po+Department+of+Economics/@48.8555759,2.3259664,16z/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black dark:hover:text-white transition-colors link-underline whitespace-normal"
            >
              28 Rue des Saints-Pères, 75007 Paris, France
            </Link>
          </div>

          {/* CV link — clean, text style only */}
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

        {/* Portrait on the right */}
        <div className="shrink-0 w-full md:w-auto">
          <div
            className="
              group relative
              w-full aspect-[3/4]
              md:w-[9.5rem] lg:w-[11rem]
              overflow-hidden
              ring-1 ring-zinc-200/70 dark:ring-zinc-800/80
            "
          >
            <Image
              src="/portrait.jpg"
              alt="Portrait of Lorenz Kipp"
              fill
              priority
              sizes="
                (max-width: 639px) 100vw,
                (max-width: 1023px) 10rem,
                11rem
              "
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  )
}


















// 'use client'

// import Image from 'next/image'
// import Link from 'next/link'
// import { Download } from 'lucide-react'
// import { TextEffect } from '@/components/ui/text-effect'

// export function Header() {
//   return (
//     <header className="mb-8 pb-2">
//       <div className="grid grid-cols-1 md:grid-cols-[auto,1fr] gap-6 md:items-start">
//         {/* Portrait column placeholder keeps structure consistent */}
//         <div className="hidden md:block" aria-hidden />

//         <div className="md:border-l md:border-zinc-100 dark:md:border-zinc-900 md:pl-6">
//           <div className="flex items-center justify-between">
//             <Link href="/" className="font-medium text-black dark:text-white hover:opacity-80 transition-opacity">
//               Lorenz Kipp
//             </Link>
//             <Link href="/cv.pdf" target="_blank" rel="noopener noreferrer"
//               className="ml-2 flex items-center space-x-1 text-zinc-400 hover:text-black dark:hover:text-white transition-colors">
//               <Download className="h-4 w-4" />
//               <span className="text-[0.82rem]">CV</span>
//             </Link>
//           </div>

//           <TextEffect as="p" preset="fade" per="char" delay={0.1}
//             className="mt-1 text-[0.9rem] text-zinc-600 dark:text-zinc-200">
//             PhD Student in Economics
//           </TextEffect>

//           <div className="mt-4 text-[0.85rem] text-zinc-500 dark:text-zinc-500">
//             <Link href="https://www.sciencespo.fr/department-economics/" target="_blank" rel="noopener noreferrer"
//               className="hover:text-black dark:hover:text-white transition-colors link-underline">
//               Department of Economics, Sciences Po
//             </Link>
//           </div>

//           <div className="mt-1 text-[0.85rem] text-zinc-500 dark:text-zinc-500">
//             <Link href="https://www.google.com/maps/place/Sciences+Po+Department+of+Economics/@48.8555759,2.3259664,16z/"
//               target="_blank" rel="noopener noreferrer"
//               className="hover:text-black dark:hover:text-white transition-colors link-underline whitespace-normal">
//               28 Rue des Saints-Pères, 75007 Paris, France
//             </Link>
//           </div>

//           {/* Divider + Portrait */}
//           <div className="mt-5 border-t border-zinc-100 dark:border-zinc-900 pt-5">
//             <div className="relative w-32 md:w-40 lg:w-44 aspect-[3/4] overflow-hidden rounded-2xl ring-1 ring-zinc-200/70 dark:ring-zinc-800/80 shadow-sm">
//               <Image src="/portrait.jpg" alt="Portrait of Lorenz Kipp" fill priority className="object-cover" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   )
// }









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


// 'use client'
// import { TextEffect } from '@/components/ui/text-effect'
// import Link from 'next/link'
// import { MapPin, FileText } from 'lucide-react'

// export function Header() {
//   return (
//     <header className="mb-8 pb-2">
//       {/* Name and CV icon */}
//       <div className="flex items-center justify-between">
//         <Link
//           href="/"
//           className="font-medium text-black dark:text-white hover:opacity-80 transition-opacity"
//         >
//           Lorenz Kipp
//         </Link>
//         <Link
//           href="/cv.pdf"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="ml-3 text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
//           title="View CV"
//         >
//           <FileText className="h-4 w-4" />
//         </Link>
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
//         <MapPin className="h-4 w-4 text-zinc-500 dark:text-zinc-400" />
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



// 'use client'
// import { TextEffect } from '@/components/ui/text-effect'
// import Link from 'next/link'
// import { MapPin } from 'lucide-react'

// export function Header() {
//   return (
//     <header className="mb-8 pb-2">
//       {/* Name */}
//       <Link
//         href="/"
//         className="font-medium text-black dark:text-white hover:opacity-80 transition-opacity"
//       >
//         Lorenz Kipp
//       </Link>

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

//       {/* Dept + school link — more separation from subtitle */}
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

//       {/* Address with map icon — tight under the dept link */}
//       <div className="flex items-center space-x-1 text-[0.85rem] text-zinc-500 dark:text-zinc-500">
//         <MapPin className="h-4 w-4 text-zinc-500 dark:text-zinc-400" />
//         <Link
//           href="https://www.google.com/maps/place/Sciences+Po+Department+of+Economics/@48.8555759,2.3259664,16z/data=!3m2!4b1!5s0x47e66e264bffb59f:0x36a53f06abf1325b!4m6!3m5!1s0x47e671d7ce624ac1:0x8b233522a7fb3eee!8m2!3d48.855576!4d2.3308373!16s%2Fg%2F11b7jhmsy3?entry=ttu&g_ep=EgoyMDI1MDcxMy4wIKXMDSoASAFQAw%3D%3D"
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















// 'use client'
// import { TextEffect } from '@/components/ui/text-effect'
// import Link from 'next/link'

// export function Header() {
//   return (
//     <header className="mb-10 flex flex-col">
//       {/* Your name (same size as before) */}
//       <Link
//         href="/"
//         className="font-medium text-black dark:text-white hover:opacity-80 transition-opacity"
//       >
//         Lorenz Kipp
//       </Link>

//       {/* Subtitle */}
//       <TextEffect
//         as="p"
//         preset="fade"
//         per="char"
//         delay={0.2}
//         className="mt-1 text-[0.9rem] text-zinc-600 dark:text-zinc-200"
//       >
//         PhD Student in Economics
//       </TextEffect>

//       {/* Department + hyperlinked “Sciences Po” */}
//       <p className="mt-4 text-[0.9rem] text-zinc-500 dark:text-zinc-500">
//         Department of Economics,&nbsp;
//         <Link
//           href="https://www.sciencespo.fr"
//           target="_blank"
//           className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors link-underline"
//         >
//           Sciences Po
//         </Link>
//       </p>

//       {/* Address */}
//       <p className="text-[0.9rem] text-zinc-500 dark:text-zinc-500">
//         28 Rue des Saints‑Pères, 75007 Paris, France
//       </p>
//     </header>
//   )
// }




// 'use client'
// import { TextEffect } from '@/components/ui/text-effect'
// import Link from 'next/link'

// export function Header() {
//   return (
//     <header className="mb-10 flex items-center justify-between">
//       <div>
//         <Link href="/" className="font-medium text-black dark:text-white">
//           Lorenz Kipp
//         </Link>
//         <TextEffect
//           as="p"
//           preset="fade"
//           per="char"
//           className="text-[0.9rem] text-zinc-600 dark:text-zinc-200"
//           delay={0.2}
//         > 
//         PhD Student in Economics
//         </TextEffect>
//         <p className="mt-4 text-[0.9rem] text-zinc-500 dark:text-zinc-500">
//           Department of Economics, Sciences Po
//         </p>
//         <p className="text-[0.9rem] text-zinc-500 dark:text-zinc-500">
//           28 Rue des Saints-Pères, 75007 Paris, France
//         </p>
//       </div>
//     </header>
//   )
// }


// 'use client'
// import { TextEffect } from '@/components/ui/text-effect'
// import Link from 'next/link'

// export function Header() {
//   return (
//     <header className="mb-10 flex flex-col sm:flex-row items-start sm:items-center justify-between">
//       {/* name + animated subtitle */}
//       <div>
//         <Link
//           href="/"
//           className="text-2xl font-bold text-black dark:text-white hover:opacity-80 transition-opacity"
//         >
//           Lorenz Kipp
//         </Link>
//         <TextEffect
//           as="p"
//           preset="fade"
//           per="char"
//           delay={0.2}
//           className="mt-1 text-sm text-zinc-600 dark:text-zinc-200"
//         >
//           PhD Student in Economics
//         </TextEffect>
//       </div>

//       {/* Sciences Po link */}
//       <nav className="mt-4 sm:mt-0">
//         <Link
//           href="https://www.sciencespo.fr"
//           target="_blank"
//           className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors link-underline"
//         >
//           Sciences Po
//         </Link>
//       </nav>
//     </header>
//   )
// }
