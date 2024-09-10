import "./globals.css";   // To have Tailwind working // @ points to the root directory
import { ReactNode, FC } from 'react';  // To assign the correct type to children

interface MyProps {   // To assign the correct types to the props
  children?: ReactNode;
}

const MainLayout: FC<MyProps> = (props) => {    // children is the prop pasted in (page.jsx (homepage))
  return (
    <html>
      <body>
        <main>
          { props.children }
        </main>
      </body>
    </html>
  );
};

export default MainLayout;