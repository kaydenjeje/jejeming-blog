export async function onRequest(context) {
  const url = new URL(context.request.url);
  // items.jejeming.co.uk로 접속 시 루트(/)를 /items/로 내부 리라이트 서빙
  if (url.hostname === "items.jejeming.co.uk") {
    if (url.pathname === "/" || url.pathname === "") {
      return context.env.ASSETS.fetch(new URL("/items/", context.request.url));
    }
  }
  return context.next();
}
