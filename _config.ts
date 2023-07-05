import lume from "lume/mod.ts"
import metas from "lume/plugins/metas.ts"
import sass from "lume/plugins/sass.ts"

const site = lume({
	src: "./src",
	prettyUrls: false, // Cloudflare Pages looks for a 404.html, 404/index.html will not work
	location: new URL("https://yukata.dev"),
})

site
	.use(metas())
	.use(sass())

export default site
