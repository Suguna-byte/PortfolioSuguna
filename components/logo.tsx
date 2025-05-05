import type { SVGProps } from "react"

export default function Logo({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="currentColor" className={className} {...props}>
  {/* Cute smiley face logo */}
  <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="4" fill="none" />
  <circle cx="35" cy="40" r="5" fill="currentColor" />
  <circle cx="65" cy="40" r="5" fill="currentColor" />
  <path d="M35 65 Q50 75 65 65" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
</svg>

  )
}
