import type { ReactElement } from "react";

interface InputProps {
  name: string;
  placeholder?: string;
}

export default function Input({ name, placeholder }: InputProps): ReactElement {
  return (
    <input name={name} placeholder={placeholder} className="border border-gray-200 rounded-md px-3 py-2 text-sm w-full" />
  );
}
