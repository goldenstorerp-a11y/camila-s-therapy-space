import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, Link, createRootRouteWithContext, HeadContent, Scripts, useRouter } from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return <div style={{ minHeight: "100vh", display: "grid", placeItems: "center", fontFamily: "sans-serif" }}><div style={{ textAlign: "center" }}><h1>404</h1><p>Página não encontrada.</p><Link to="/">Voltar para o início</Link></div></div>;
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => { reportLovableError(error, { boundary: "tanstack_root_error_component" }); }, [error]);
  return <div style={{ minHeight: "100vh", display: "grid", placeItems: "center", fontFamily: "sans-serif", padding: 24 }}><div style={{ textAlign: "center", maxWidth: 440 }}><h1>Algo não saiu como esperado</h1><p>Atualize a página ou tente novamente.</p><button onClick={() => { router.invalidate(); reset(); }}>Tentar novamente</button></div></div>;
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Camila Nunes | Psicóloga" },
      { name: "description", content: "Psicologia com acolhimento, presença e respeito à sua história. Conheça o trabalho de Camila Nunes." },
      { name: "author", content: "Camila Nunes" },
      { property: "og:title", content: "Camila Nunes | Psicóloga" },
      { property: "og:description", content: "Um espaço seguro para olhar para você com mais gentileza." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "stylesheet", href: appCss }, { rel: "icon", href: "/psicologia.svg", type: "image/svg+xml" }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return <html lang="pt-BR"><head><HeadContent /><style>{`.photo-card{position:relative!important;overflow:hidden!important;background:transparent!important;height:auto!important;aspect-ratio:1/1!important}.photo-card img.camila-photo{position:static!important;inset:auto!important;width:100%!important;height:auto!important;min-width:0!important;min-height:0!important;max-width:100%!important;display:block!important;object-fit:initial!important;object-position:initial!important;margin:0!important;padding:0!important;border:0!important;transform:none!important}.photo-card:after{z-index:3!important}.photo-label{z-index:5!important}`}</style></head><body>{children}<Scripts /></body></html>;
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return <QueryClientProvider client={queryClient}><Outlet /></QueryClientProvider>;
}
