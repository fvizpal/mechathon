import CheckModal from "@/components/shared/CheckModal";
import { ModeToggle } from "@/components/shared/ModeToggle";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <ModeToggle />
        <br />
        Hello!
        <CheckModal />
      </div>
    </main>
  );
}
