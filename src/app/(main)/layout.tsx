import NavigationSidebar from "@/components/navigation/NavigationSidebar";

const MainLayout = async ({
  children
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="h-full">
      <div className="h-full w-[72px]">
        <NavigationSidebar />
      </div>
      <main>
        {children}
      </main>
    </div>
  );
}

export default MainLayout;