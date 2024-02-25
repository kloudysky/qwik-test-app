import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { CenteredText } from "~/components/centered-text";

export default component$(() => {
  return <CenteredText />;
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
