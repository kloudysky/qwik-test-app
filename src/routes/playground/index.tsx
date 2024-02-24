import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div>
      <h1>Hello world</h1>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Qwik Cloud",
  meta: [
    {
      name: "description",
      content: "Kloud Qwik site test description",
    },
  ],
};
