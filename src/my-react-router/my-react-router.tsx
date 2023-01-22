import { useEffect, useState, createContext, useContext } from "react";

const PathContext = createContext<{
  currentPath: string;
  setCurrentPath: (p: string) => void;
}>({ currentPath: "/", setCurrentPath: () => {} });

export function RouterProvider(props: {
  routes: { path: string; element: React.ReactNode }[];
}) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const cb = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", cb);

    return () => {
      window.removeEventListener("popstate", cb);
    };
  }, []);

  useEffect(() => {
    if (currentPath !== window.location.pathname)
      window.history.pushState(null, "", currentPath);
  }, [currentPath]);

  return (
    <PathContext.Provider
      value={{ currentPath, setCurrentPath: (p: string) => setCurrentPath(p) }}
    >
      {props.routes.find((r) => r.path === currentPath)?.element}
    </PathContext.Provider>
  );
}

export function Link(props: { to: string; children: React.ReactNode }) {
  const pathContext = useContext(PathContext);

  return (
    <span
      style={{
        color: "#2563eb",
        textDecoration: "underline",
        cursor: "pointer",
      }}
      onClick={() => pathContext.setCurrentPath(props.to)}
    >
      {props.children}
    </span>
  );
}
