import type { IconName } from "@/components/ui/Icon"
import { site } from "@/data/site"

export const contact = {
  kicker: "Contact",
  title: "Have an idea? Let's build it well.",
  description:
    "I'm open to internships, junior full-stack roles, freelance work, and interesting collaborations. Tell me what you're working on — I usually reply within a day.",
  note: "Prefer email? Write to me directly — the form lands in the same inbox.",
  responseTime: "Usually replies within 24 hours",
  links: [
    {
      icon: "mail" as IconName,
      label: "Email",
      value: site.email,
      href: `mailto:${site.email}`,
    },
    {
      icon: "github" as IconName,
      label: "GitHub",
      value: "github.com/Likhon-25",
      href: "https://github.com/Likhon-25",
    },
    {
      icon: "linkedin" as IconName,
      label: "LinkedIn",
      value: "in/likhon-mondol",
      href: "https://www.linkedin.com/in/likhon-mondol/",
    },
    {
      icon: "facebook" as IconName,
      label: "Facebook",
      value: "Facebook profile",
      href: "https://www.facebook.com/profile.php?id=100091255685543",
    },
  ],
}
