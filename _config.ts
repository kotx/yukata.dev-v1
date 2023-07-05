import lume from "lume/mod.ts"
import metas from "lume/plugins/metas.ts"
import sass from "lume/plugins/sass.ts"

const site = lume({
	src: "./src",
	location: new URL("https://yukata.dev"),
})

site
	.use(metas())
	.use(sass())

export default site
