import { $, component$, useStore } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Button } from "~/components/button";

export default component$(() => {
  const state = useStore({ name: "undefined" });

  const handleName = $(() => {
    state.name = "Kloud";
  });

  return (
    <div>
      <h1>Hello world</h1>
      <Button handleFunction={handleName} />
      <div>Name: {state.name}</div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Qwik Kloud",
  meta: [
    {
      name: "description",
      content: "Kloud Qwik site test description",
    },
  ],
};
