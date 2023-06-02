import type { Metadata } from 'next';
import StyledComponentsRegistry from '@/commom/components/AntdRegistry';
import './globals.scss';

export const metadata: Metadata = {
  title: 'Desinger Flow',
  description: 'Desinger Flow Viewer',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
