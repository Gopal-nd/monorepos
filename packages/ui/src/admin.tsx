import { ReactNode } from "react";
interface AdminProps {
  children: ReactNode;
}
export default function Admin({ children }: AdminProps) {
  return <h1>{children}</h1>;
}
