import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  const state = true;
  return (
    <div>
     <UserButton afterSignOutUrl="/"/>
    </div>
  );
}
