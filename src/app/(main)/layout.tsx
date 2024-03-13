import NavigationSidebar from "@/components/navigation/NavigationSidebar";

const MainLayout = async ({
  children
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="h-full">
      <div className="h-full flex-col fixed w-[250px] bg-slate-400">
        <NavigationSidebar />
      </div>
      <main className="h-full">
        {children}
      </main>
    </div>
  );
}

export default MainLayout;