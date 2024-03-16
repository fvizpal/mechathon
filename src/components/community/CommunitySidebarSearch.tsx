"use client"

import { useEffect, useState } from "react"
import { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "../ui/command";
import { useParams, useRouter } from "next/navigation";
import { Search } from "lucide-react";


interface CommunitySearchProps {
  data: {
    label: string;
    type: "group" | "member",
    data: {
      icon: React.ReactNode;
      name: string;
      id: string;
    }[] | undefined
  }[]
}

const CommunitySidebarSearch = ({ data }: CommunitySearchProps) => {
  const router = useRouter();
  const params = useParams();

  const [open, setOpen] = useState(false)

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])


  const onClick = ({ id, type }: { id: string, type: "group" | "member" }) => {
    setOpen(false);

    if (type === "member") {
      return router.push(`/community/${params?.communityId}/conversations/${id}`)
    }

    if (type === "group") {
      return router.push(`/community/${params?.communityId}/groups/${id}`)
    }
  }


  return (
    <div>
      <button
        className=" group flex items-center px-2 py-2 rounded-md gap-x-2 w-full transition "
        onClick={() => setOpen(true)}
      >
        <p className="text-sm font-semibold transition">
          Search
        </p>
        <Search className="w-4 h-4 " />
        <kbd
          className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground ml-auto"
        >
          <span className="text-xs">©️</span>J
        </kbd>
      </button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search all groups and members" />
        <CommandList>
          <CommandEmpty>
            No Results found
          </CommandEmpty>
          {data.map(({ label, type, data }) => {
            if (!data?.length) return null;

            return (
              <CommandGroup key={label} heading={label}>
                {data?.map(({ id, icon, name }) => {
                  return (
                    <CommandItem key={id} onSelect={() => onClick({ id, type })}>
                      {icon}
                      <span className=" mx-2 capitalize">{name}</span>
                    </CommandItem>
                  )
                })}
              </CommandGroup>
            )
          })}
        </CommandList>
      </CommandDialog>
    </div>
  )
}

export default CommunitySidebarSearch