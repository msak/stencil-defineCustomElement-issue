interface StencilComponent extends CustomElementConstructor {
  is: string;
}

export function defineCustomElements(setPlatformOptions, components: any[], nameSpacePrefix: string) {

  if (nameSpacePrefix != null) {
    // set namespace prefix for all custom child components
    // e.g. return <lux-child /> will be rendered as <myns-lux-child />
    setPlatformOptions({
      replaceNSPrefix: nameSpacePrefix
    } as any);
  }

  // create for all components a custome elements with customized prefix
  for (const comp in components) {
    if (Object.prototype.hasOwnProperty.call(components, comp)) {
      const compClass: StencilComponent = components[comp];
      customElements.define( `${nameSpacePrefix}-${compClass.is}`, compClass);
    }
  }
}