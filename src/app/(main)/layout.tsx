import NavigationSidebar from "@/components/navigation/NavigationSidebar";

const MainLayout = async ({
  children
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="h-full">
      <div className="h-full md:flex flex-col w-[250px] fixed bg-slate-400">
        <NavigationSidebar />
      </div>
      <main className="md:pl-[250px] h-full">
        {children}
      </main>
    </div>
  );
}

export default MainLayout;