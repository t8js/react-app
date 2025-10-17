import { A, useRoute } from "@t8/react-router";

export const Nav = () => {
  let { at } = useRoute();

  return (
    <nav>
      <p>
        {at("/", <span>Intro</span>, <A href="/">Intro</A>)}
        {" | "}
        {at("/about", <span>About</span>, <A href="/about">About</A>)}
        {" | "}
        {at(
          "/sections/1",
          <span>Section 1</span>,
          <A href="/sections/1">Section 1</A>,
        )}
        {" | "}
        {at(
          "/sections/2",
          <span>Section 2</span>,
          <A href="/sections/2">Section 2</A>,
        )}
      </p>
    </nav>
  );
};
