import { component$ } from "@builder.io/qwik";

export const CenteredText = component$(() => {
  return (
    <div class="min-h-screen">
      <div class="flex h-screen items-center justify-center font-sans text-2xl font-semibold text-gray-800">
        Hi! I'm Adam.
      </div>
    </div>
  );
});
