import Link from "next/link";

type LinkItem = {
  href: string;
  label: string;
};

const SidebarOption = ({ links }: { links: LinkItem[] }) => {
  return (
    <div className="flex flex-col gap-5 mt-5">
      {links.map((link) => (
        <Link href={link.href} key={link.href}>
          <div className="bg-white/30 rounded-md h-[45px] pl-5 pt-2 font-semibold text-lg shadow-md">
            {link.label}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SidebarOption;
