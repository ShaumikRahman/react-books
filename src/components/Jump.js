import { useRef, useEffect, useState } from "react";

const Jump = () => {
  const jump = useRef();
  const [Y, setY] = useState(window.scrollY);

  document.body.onscroll = () => {
    setY(window.scrollY);
  };

  useEffect(() => {
    console.log(Y);
    if (Y > 500) {
      jump.current.classList.add("visible");
    } else {
      jump.current.classList.remove("visible");
    }
  }, [Y]);

  return (
    <div
      className="jump"
      ref={jump}
      onClick={() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      }}
    >
      &#8593;
    </div>
  );
};

export default Jump;
