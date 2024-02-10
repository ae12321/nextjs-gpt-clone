export function middleware(request) {
  return Response.redirect(new URL("/", request.url));
}

export const config = {
  matcher: ["/about/:path*", "/tasks/:path*"],
};

// -------------------------------------------
// export function middleware(request) {
//   return Response.json({ data: "middleware" });
// }

// export const config = {
//   matcher: "/about",
// };
