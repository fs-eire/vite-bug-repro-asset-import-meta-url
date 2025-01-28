let instance

const init = async () => {
    const url = new URL("test.wasm", import.meta.url);

    const response = await fetch(url);
    instance = (await WebAssembly.instantiateStreaming(response)).instance;
};

const fac = (n) => {
    return instance.exports.fac(n);
};

export { init, fac };