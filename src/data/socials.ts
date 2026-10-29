import type { IconName } from "@/components/ui/Icon"

export type SocialLink = {
  label: string
  href: string
  icon: IconName
}

export const socials: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/Likhon-25", icon: "github" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/likhon-mondol/",
    icon: "linkedin",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100091255685543",
    icon: "facebook",
  },
  { label: "Email", href: "mailto:likhonmondol327@gmail.com", icon: "mail" },
]
