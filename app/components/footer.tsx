import { InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

export function Footer() {
  return (
    <footer className="md:py-24 bg-neutral-900 p-5">
      <div className="md:container mx-auto flex justify-between">
        <p className="text-sm text-neutral-400">@ 2025 Eleven Soft. Todos os direitos reservados.</p>
        <div className="flex gap-x-7">
        <a target="_blank" href="https://www.instagram.com/elevensoft.dev/">
          <InstagramLogoIcon className="w-6 h-6 text-neutral-400 hover:text-neutral-200" />
        </a>
        <a target="_blank" href="https://www.linkedin.com/company/eleven-soft-dev/">
          <LinkedInLogoIcon className="w-6 h-6 text-neutral-400 hover:text-neutral-200" />
        </a>
        </div>
      </div>
    </footer>
  )
}
