import { useState, createContext } from "react";

interface SlideProps {
  open: boolean;
  setOpen(data: boolean): void
}

interface childrenProps {
  children: object
}

export const SlideContext = createContext({} as SlideProps);
export const SlideProvider = (props: childrenProps) => {
  const [open, setOpen] = useState(false)
  const store = {
    open: open,
    setOpen: setOpen
  };
  return (
    <SlideContext.Provider value={store}>
      {props.children}
    </SlideContext.Provider>
  );
};


