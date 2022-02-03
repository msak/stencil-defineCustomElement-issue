export function defineCustomElements(setPlatformOptions, components, nameSpacePrefix) {
    if (nameSpacePrefix != null) {
        // set namespace prefix for all custom child components
        // e.g. return <lux-child /> will be rendered as <myns-lux-child />
        setPlatformOptions({
            replaceNSPrefix: nameSpacePrefix
        });
    }
    // create for all components a custome elements with customized prefix
    for (const comp in components) {
        if (Object.prototype.hasOwnProperty.call(components, comp)) {
            const compClass = components[comp];
            customElements.define(`${nameSpacePrefix}-${compClass.is}`, compClass);
        }
    }
}
