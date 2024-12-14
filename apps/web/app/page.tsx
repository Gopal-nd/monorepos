import { Button } from "@repo/ui/button";
import Admin from "@repo/ui/admin";
export default function Page(): JSX.Element {
  return (
    <div className=" flex h-screen w-full flex">
      <Admin>Hello this is admin</Admin>
      <Button appName="web Application">Hi There</Button>
    </div>
  );
}
