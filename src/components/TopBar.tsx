import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";


import { DialogHTMLAttributes, useState } from "react";

import type { TopbarMenuLinkConfig } from "src/types";
import { clsx } from "src/utils/css";

type TopBarProps = {
  links?: TopbarMenuLinkConfig[];
};

type TopbarMenuLinkProps = {
  linkConfig: TopbarMenuLinkConfig;
  toggleMenu: (value: boolean) => void;
};

export function TopbarMenuLink(props: TopbarMenuLinkProps) {
  const { linkConfig, toggleMenu } = props;

  const { label, link } = linkConfig;

  return (
    <Link to={link} className="text-black hover:underline transition-colors duration-200" onClick={() => toggleMenu(false)}>
      {label}
    </Link>
  );
}

type ModalProps = {
  title?: string;
  onModalClose?: () => void;
} & DialogHTMLAttributes<HTMLDialogElement>;

export function Modal(props: ModalProps) {
  const { children, onModalClose, className, title, ...rest } = props;

  return (
    <dialog
      {...rest}
      className={clsx(className, "inset-0 w-screen h-screen bg-zinc-50 p-6 transition-transform duration-300 transform scale-100 text-black")}
    >
      <div className="flex justify-between">
        {!!title && <span className="text-3xl font-bold text-black">{title}</span>}
        <button className="cursor-pointer" onClick={onModalClose}>
          <X size={32} />
        </button>
      </div>
      <div>{children}</div>
    </dialog>
  );
}

export function TopBar(props: TopBarProps) {
  const { links = [] } = props;

  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu(open?: boolean) {
    if (typeof open === "boolean") {
      setMenuOpen(open);
    } else {
      setMenuOpen((prev) => !prev);
    }
  }

  return (
    <header className="px-8 py-4 flex flex-row justify-between items-center bg-zinc-50 min-h-8">
      <a href="#" className="text-zinc-900 text-xl font-bold font-mr-dafoe">
        Vh
      </a>
      <nav className="relative">
        <button className="text-zinc-900" onClick={() => toggleMenu()}>
          <Menu />
        </button>
        <div
          className={clsx(
            "absolute bg-zinc-900 top-11 right-0 p-4 transition-opacity hidden md:block",
            {
              "opacity-0": !menuOpen,
              "opacity-100": menuOpen,
            },
          )}
        >
          <ul>
            {links.map((link) => (
              <li key={link.link}>
                <TopbarMenuLink linkConfig={link} toggleMenu={toggleMenu} />
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <Modal
        open={menuOpen}
        title="Navigate"
        onModalClose={() => toggleMenu(false)}
        className="md:hidden"
      >
        <nav className="pt-8">
          <ul>
            {links.map(({ label, link }) => (
              <li key={link} className="border-b text-xl pt-2 text-black hover:text-gray-700 transition-colors duration-200">
                <Link to={link} onClick={() => setMenuOpen(false)}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </Modal>
    </header>
  );
}
