import { useEffect, useState } from "react";
import copy from "copy-to-clipboard";

export default function useCopyToClipboard(resetInterval = null) {
  const [isCopied, setCopied] = useState(-1);

  function handleCopy(text, whichOne) {
    copy(text.toString());
    setCopied(whichOne);
  }

  useEffect(() => {
    let timeout;

    if (isCopied > -1 && resetInterval) {
      timeout = setTimeout(() => setCopied(-1), resetInterval);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [isCopied, resetInterval]);

  return [isCopied, handleCopy];
}
