import { MetaData } from "lume/plugins/metas.ts"
import convert from "npm:color-convert"

export default {
	metas: {
		site: "Kot's Website",
		lang: "en",
		generator: true,
		title: "=title",
		description: "Hi! This is the main website for everything about me, Kot!",
		color: "#" + convert.hsl.hex(200, 100, 80),
	} as MetaData,
}
