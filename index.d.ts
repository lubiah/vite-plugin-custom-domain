export default plugin;
/**
 * @param {Object<string, string[]>} data;
 * @returns {import('vite').Plugin} */
declare function plugin(data?: {
    [x: string]: string[];
}): import('vite').Plugin;
