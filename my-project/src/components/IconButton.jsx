import { useRef, useState } from "react";

export default function IconButton({ children, text, color, site, downloadable, ...props }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);

  const handleClick = (site) => {
    window.open(site);
  };

  return downloadable ? (
    <a
      href={site}
      download={site.split("/").pop()} // Obtén el nombre del archivo para la descarga
      className={`
        flex p-2 items-center rounded-lg
        text-white ${color || "bg-button_primary"}
      `}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      {...props}
    >
      {children}
      <div
        style={{ width: hovered ? ref.current?.offsetWidth || 0 : 0 }}
        className="overflow-x-hidden transition-all duration-300 ease-out"
      >
        <span ref={ref} className="px-1.5 font-semibold text-text_primary text-sm">
          {text}
        </span>
      </div>
    </a>
  ) : (
    <button
      type="button"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => handleClick(site)}
      className={`
        flex p-2 items-center rounded-lg
        text-white ${color || "bg-button_primary"}
      `}
      {...props}
    >
      {children}
      <div
        style={{ width: hovered ? ref.current?.offsetWidth || 0 : 0 }}
        className="overflow-x-hidden transition-all duration-300 ease-out"
      >
        <span ref={ref} className="px-1.5 font-semibold text-text_primary text-sm">
          {text}
        </span>
      </div>
    </button>
  );
}