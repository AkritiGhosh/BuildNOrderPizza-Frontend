import { createContext, ReactNode, useContext } from "react";
import { useState } from "react";

const DialogContext = createContext({
  isDialogOpen: false,
  openDialog: (data) => {},
  closeDialog: () => {},
});

export const DialogProvider = ({ children }: { children: ReactNode }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState<ReactNode>(<></>);
  const openDialog = (data: ReactNode) => {
    setIsDialogOpen(true);
    setDialogContent(data);
  };
  const closeDialog = () => {
    setIsDialogOpen(false);
    setDialogContent(<></>);
  };

  return (
    <DialogContext.Provider value={{ isDialogOpen, closeDialog, openDialog }}>
      {children}
      {isDialogOpen && (
        <>
          <div
            onClick={closeDialog}
            className="w-screen h-screen fixed inset-0 bg-amber-100/10 dark:bg-slate-900/10 overflow-hidden z-[9999]"
          />
          <section className="bg-amber-100 dark:bg-slate-900 w-[calc(100%-32px)] mx-auto sm:max-w-xs border border-white dark:border-black rounded-md">
            {dialogContent}
          </section>
        </>
      )}
    </DialogContext.Provider>
  );
};

const useDialogDialog = () => useContext(DialogContext);

export default useDialogDialog;
