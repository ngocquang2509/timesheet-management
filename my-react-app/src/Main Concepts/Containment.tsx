export const User = ({ children }: { children: any }) => {
  return (
    <>
      <h1>This is a parent component</h1>
      {children}
    </>
  );
};
