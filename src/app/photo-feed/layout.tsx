import { Suspense } from 'react';

export default function Layout(props: {
  modal: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <>
      <Suspense fallback={null}>
        {props.modal}
      </Suspense>
      {props.children}
    </>
  );
}