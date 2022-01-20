// import { prerendering } from "$app/env"
// import type { Handle } from "@sveltejs/kit"
// import { minify } from "html-minifier"

// const minification_options = {
//   collapseBooleanAttributes: true,
//   collapseWhitespace: true,
//   conservativeCollapse: true,
//   decodeEntities: true,
//   html5: true,
//   ignoreCustomComments: [/^#/],
//   minifyCSS: true,
//   minifyJS: false,
//   removeAttributeQuotes: true,
//   removeComments: true,
//   removeOptionalTags: true,
//   removeRedundantAttributes: true,
//   removeScriptTypeAttributes: true,
//   removeStyleLinkTypeAttributes: true,
//   sortAttributes: true,
//   sortClassName: true,
// }

// export const handle: Handle = async ({ event, resolve }) => {
//   const response = await resolve(event)

//   if (
//     prerendering &&
//     response.headers.get("content-type").startsWith("text/html")
//   ) {
//     const body = await response.text()
//     const b = minify(body, minification_options)
//     return new Response(b, response)
//   }

//   return response
// }
