import { useState } from 'react';

function useModal(defaultVal = false) {
  const [modal, setModal] = useState(defaultVal);

  return [modal, setModal];
}

export default useModal;
