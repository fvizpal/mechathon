import NavigationSidebar from "@/components/navigation/NavigationSidebar";

const MainLayout = async ({
  children
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="h-full">
      <div className=" hidden md:flex h-full flex-col w-[250px] fixed">
        <NavigationSidebar />
      </div>
      <main className="md:pl-[250px] h-full">
        {children}
      </main>
    </div>
  );
}

export default MainLayout;