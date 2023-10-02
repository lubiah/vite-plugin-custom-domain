import hosts from "hostparty";

//@ts-check;

/** 
 * @param {Object<string, string[]>} data;
 * @returns {import('vite').Plugin} */
const plugin = (data = {}) => {
    return {
        name: "custom-domain",
        enforce: "pre",
        apply: "serve",
        options: async (options) => {
            if (!Object.keys(data).length) return options;
            for (const key in data) {
                console.log(`adding ${data[key].join(",")} to ip ${key}`);
                await hosts.add(key, data[key]);
            }
            return options;
        },
        buildEnd: async () => {
            if (!Object.keys(data).length) return;
            for (const key in data) {
                await hosts.purge(data[key]);
                console.log(`removing ${data[key].join(",")} from ip ${key}`);
            }

        }

    }
}

export default plugin;
