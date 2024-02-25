import { $, component$, useStore, useTask$ } from "@builder.io/qwik";

interface ItemProps {
  handleFunction?: any;
}

export const Button = component$((props: ItemProps) => {
  //   const message = useSignal("Signal None");
  const state = useStore({ message: "state none", color: "no color" });

  const handleClick = $(() => {
    state.message = "Button clicked";
    props.handleFunction();
  });

  // if you need something to be loaded on the browser with out calling the server, use useClientEffect$
  useTask$(({ track }) => {
    track(state);
    // console.log(message.value);
    console.log(state.message);
  });

  return (
    <button
      class="rounded-sm bg-sky-500 px-4 py-2 text-white hover:bg-sky-400"
      onClick$={handleClick}
    >
      Button
    </button>
  );
});
