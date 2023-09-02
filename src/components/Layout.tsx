interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="flex items-center justify-center h-full bg-slate-300/20">
      {children}
    </main>
  );
};

export default Layout;
