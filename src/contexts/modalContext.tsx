import React, {useContext, createContext} from 'react';

const ModalContext = createContext({});

export function ModalProvider({children}) {
  const [modalOpen, setModalOpen] = React.useState(false);

  function onClose() {
    setModalOpen(false);
  }

  return (
    <ModalContext.Provider
      value={{
        modalOpen,
        setModalOpen,
        onClose,
      }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);

  return context;
}
