import { Menubar, MenubarMenu } from "~/components/ui/menubar";
import { Input } from "~/components/ui/input";
import { Search } from "lucide-react";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <div>
      <Menubar className="flex justify-between p-8 ">
        <div>
          <MenubarMenu>
            <h1 className="font-bold text-cyan-800 text-2xl">YORANIMELIST</h1>
          </MenubarMenu>
        </div>
        <div className="flex md:w-full md:max-w-sm md:items-center md:space-x-2">
          <Input
            type="text"
            placeholder="Search Anime"
            className="hidden md:block"
          />
          <Button type="submit" className="bg-cyan-800">
            <Search />
          </Button>
        </div>
      </Menubar>
    </div>
  );
}
