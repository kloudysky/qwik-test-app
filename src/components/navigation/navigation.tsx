import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export const Navigation = component$(() => {
  return (
    <div class="flex items-center justify-between bg-white py-4 shadow-xl">
      <div class="ml-5">kloud logo</div>
      <div class="mr-5">
        <ul class="flex space-x-10">
          <li>
            <Link href="/">Home</Link>
            <li>
              <Link href="/playground">Playground</Link>
            </li>
          </li>
        </ul>
      </div>
    </div>
  );
});
