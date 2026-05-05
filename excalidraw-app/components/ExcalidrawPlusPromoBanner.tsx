export const ExcalidrawPlusPromoBanner = ({
  isSignedIn,
}: {
  isSignedIn: boolean;
}) => {
  const href = isSignedIn
    ? import.meta.env.VITE_APP_PLUS_APP
    : `${
        import.meta.env.VITE_APP_PLUS_LP
      }/plus?utm_source=excalidraw&utm_medium=app&utm_content=guestBanner#excalidraw-redirect`;

  return (
    <a href={href} target="_blank" rel="noopener" className="plus-banner">
      Excalidraw+
    </a>
  );
};
