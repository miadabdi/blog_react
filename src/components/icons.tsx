import type { ReactNode, SVGProps } from 'react';

export type IconProps = SVGProps<SVGSVGElement>;

const iconDefaults = {
  xmlns: 'http://www.w3.org/2000/svg',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
} as const;

function createIcon(content: ReactNode) {
  return function Icon({ width = 24, height = 24, role = 'img', ...props }: IconProps) {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        focusable="false"
        aria-hidden={props['aria-label'] ? undefined : true}
        role={role}
        {...iconDefaults}
        {...props}
      >
        {content}
      </svg>
    );
  };
}

export const SunIcon = createIcon([
  <circle key="c" cx="12" cy="12" r="4" />,
  <line key="l1" x1="12" y1="2" x2="12" y2="4" />,
  <line key="l2" x1="12" y1="20" x2="12" y2="22" />,
  <line key="l3" x1="4.93" y1="4.93" x2="6.34" y2="6.34" />,
  <line key="l4" x1="17.66" y1="17.66" x2="19.07" y2="19.07" />,
  <line key="l5" x1="2" y1="12" x2="4" y2="12" />,
  <line key="l6" x1="20" y1="12" x2="22" y2="12" />,
  <line key="l7" x1="4.93" y1="19.07" x2="6.34" y2="17.66" />,
  <line key="l8" x1="17.66" y1="6.34" x2="19.07" y2="4.93" />,
]);

export const MoonIcon = createIcon(
  <path d="M21 12.79A9 9 0 0 1 11.21 3 7 7 0 0 0 12 17a7 7 0 0 0 9-4.21z" />,
);

export const MenuIcon = createIcon([
  <line key="m1" x1="4" y1="6" x2="20" y2="6" />,
  <line key="m2" x1="4" y1="12" x2="20" y2="12" />,
  <line key="m3" x1="4" y1="18" x2="20" y2="18" />,
]);

export const XIcon = createIcon([
  <line key="x1" x1="18" y1="6" x2="6" y2="18" />,
  <line key="x2" x1="6" y1="6" x2="18" y2="18" />,
]);

export const CodeIcon = createIcon([
  <polyline key="c1" points="16 18 22 12 16 6" />,
  <polyline key="c2" points="8 6 2 12 8 18" />,
]);

export const FileTextIcon = createIcon([
  <path key="f1" d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />,
  <polyline key="f2" points="14 3 14 9 20 9" />,
  <line key="f3" x1="16" y1="13" x2="8" y2="13" />,
  <line key="f4" x1="16" y1="17" x2="8" y2="17" />,
]);

export const TerminalIcon = createIcon([
  <polyline key="t1" points="4 17 10 11 4 5" />,
  <line key="t2" x1="12" y1="19" x2="20" y2="19" />,
]);

export const UserIcon = createIcon([
  <path key="u1" d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />,
  <circle key="u2" cx="12" cy="7" r="4" />,
]);
