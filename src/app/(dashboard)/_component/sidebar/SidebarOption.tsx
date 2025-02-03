import Link from "next/link";

type LinkItem = {
  href: string;
  label: string;
};

const SidebarOption = ({ links }: { links: LinkItem[] }) => {
  return (
    <div className="flex  items-center gap-5 mt-5">
      {links.map((link) => (
        <Link
          href={link.href}
          key={link.href}
          className="border px-4 py-1 border-gray-400 rounded-md bg-gray-50 hover:bg-gray-100 text-gray-600 hover:text-gray-900 shadow-sm"
        >
          <div>{link.label}</div>
        </Link>
      ))}
    </div>
  );
};

export default SidebarOption;
