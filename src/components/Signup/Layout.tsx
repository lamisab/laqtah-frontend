import { ReactElement } from 'react';


interface LayoutProps {
    children: ReactElement;
}
export function Layout({ children }: LayoutProps) {
    return (
        <>
            {children}
              {/* <Footer />
        */}
        </>
    );
      }