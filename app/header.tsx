'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import { MapPin, FileSignature, Download } from 'lucide-react'

export function Header() {
  return (
    <header className="mb-8 pb-2">
      {/* Name and CV link */}
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className="font-medium text-black dark:text-white hover:opacity-80 transition-opacity"
        >
          Lorenz Kipp
        </Link>


        {/* ---- CV Option 2: Icon + Text ---- */}
      <Link
        href="/cv.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="ml-2 flex items-center space-x-1 text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
      >
        <Download className="h-4 w-4" />
        <span className="text-[0.82rem]">CV</span>
      </Link>

      </div>

      {/* Subtitle */}
      <TextEffect
        as="p"
        preset="fade"
        per="char"
        delay={0.1}
        className="mt-0.5 text-[0.9rem] text-zinc-600 dark:text-zinc-200"
      >
        PhD Student in Economics
      </TextEffect>

      {/* Dept + school link */}
      <div className="mt-5 text-[0.85rem] text-zinc-500 dark:text-zinc-500">
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
      <div className="flex items-center space-x-1 text-[0.85rem] text-zinc-500 dark:text-zinc-500">
        {/* <MapPin className="h-4 w-4 text-zinc-500 dark:text-zinc-400" /> */}
        <Link
          href="https://www.google.com/maps/place/Sciences+Po+Department+of+Economics/@48.8555759,2.3259664,16z/data=!3m2!4b1!5s0x47e66e264bffb59f:0x36a53f06abf1325b!4m6!3m5!1s0x47e671d7ce624ac1:0x8b233522a7fb3eee!8m2!3d48.855576!4d2.3308373!16s%2Fg%2F11b7jhmsy3?entry=ttu"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black dark:hover:text-white transition-colors link-underline whitespace-normal"
        >
          28 Rue des Saints‑Pères, 75007 Paris, France
        </Link>
      </div>
    </header>
  )
}


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
