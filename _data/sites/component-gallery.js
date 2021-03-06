module.exports = {
	// skip if localhost
	// skip if this is a new fork of the speedlify (not Zach’s)
	skip: false,
	options: {
		frequency: 1, // 1 minute
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
		freshChrome: "site"
	},
	urls: [
        "https://component.gallery/",
        "https://component.gallery/components/",
        "https://component.gallery/design-systems/",
        "https://component.gallery/components/accordion/",
        "https://component.gallery/components/button/",
	]
};
