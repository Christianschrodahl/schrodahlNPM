async function convertAttrToStyling(attrs: Object, el: HTMLHeadElement): Promise<string[][]> {
  return Object.entries(attrs).map(([k, v]) => {
    const key:string = convertToCssProperty(k);
    if (key in el.style) return [key, v];
    return false;
  }).filter(Boolean) as string[][];
}

async function addStylesheetRules(rules: string[]|Array<any>):Promise<void> {
    const styleEl:HTMLStyleElement = document.createElement("style");

    // Append <style> element to <head>
    document.head.appendChild(styleEl);
  
    // Grab style element's sheet
    const styleSheet = styleEl.sheet;
  
    for (let i = 0; i < rules.length; i++) {
      let j = 1,
        rule = rules[i],
        selector = rule[0],
        propStr = "";
      // If the second argument of a rule is an array of arrays, correct our variables.
      if (Array.isArray(rule[1][0])) {
        rule = rule[1];
        j = 0;
      }
      for (let pl = rule.length; j < pl; j++) {
        const prop = rule[j];
        propStr += `${prop[0]}: ${prop[1]}${prop[2] ? " !important" : ""};\n`;
      }
  
      // Insert CSS Rule
      styleSheet.insertRule(
        `${selector}{${propStr}}`,
        styleSheet.cssRules.length,
      );
    }
  }
  function convertToCssProperty(property:string):string {
    return property.replace(/[A-Z]/g, match => `-${match.toLowerCase()}`);
  }
export async function setCustomStyleFromAttr(scopeId:string, elementName: string, attrs: Object, el:HTMLElement):Promise<void> {
  const generateRule = await convertAttrToStyling(attrs, el)
  console.log(generateRule)
  await addStylesheetRules([[`${elementName}[${scopeId}]`,generateRule]])

  // remmove css atributs in the dom element
  Object.entries(attrs).forEach(([k,v]) =>{
    if( el.style.hasOwnProperty(k)){
        el.removeAttribute(k)
    }    
  })
}

//themeSetup
/*export function themeSetup(theme){
  Object.entries(theme).forEach(([selector, styles]) => {
    Object.entries(styles).forEach(([prop, v]) => {
      console.log("VVVVVV", v, prop)
      if(typeof v === 'string'){
        const value:string = v
        document.documentElement.style.setProperty(
          `--${selector}-${prop}`,
          value
        );
      }else if(prop === 'baseStyle'){
        Object.entries(v).forEach(([eventProp, val]) => {
          document.documentElement.style.setProperty(
            `--${selector}-${eventProp}`,
            val
          );
        })
      }else if(typeof v === "object" && prop.indexOf('_') !== -1){
        //props like hover, active, focus etc
        Object.entries(v).forEach(([eventProp, val]) => {
          
          document.documentElement.style.setProperty(
            `--${selector}-${prop}-${eventProp}`,
            val
          );
        })
      }
      
    });
  });
}*/
export function themeSetup(theme: Record<string, Record<string, any>>): void {
  const generateCssVariables = (
    selector: string,
    prop: string,
    value: any
  ) => {
    if (typeof value === 'string') {
      document.documentElement.style.setProperty(
        `--${selector}-${prop}`,
        value
      );
    } else if (typeof value === 'object') {
      Object.entries(value).forEach(([subProp, subValue]) => {
        if (subProp.startsWith('_')) {
          generateCssVariables(
            selector,
            `${prop}${subProp}`,
            subValue
          );
        } else {
          generateCssVariables(
            `${selector}-${prop}`,
            subProp,
            subValue
          );
        }
      });
    }
  };

  Object.entries(theme).forEach(([selector, styles]) => {
    Object.entries(styles).forEach(([prop, v]) => {
      generateCssVariables(selector, prop, v);
    });
  });
}

/*export function settingUpGlobalStyles(theme, element, component):void {
      const dynamicStyle = document.createElement('style');
      dynamicStyle.setAttribute('type', 'text/css')
      const uniqueID = component['__scopeId'] ? `[${component['__scopeId'] }]`: ``

      //this will split the styling if it contains mouseevents etc
      const dynamicClassEventHandler = Object.entries(theme[component.__name]).filter((e, i)=> {
        const propType:string = typeof e[1]
        if(propType === 'object' || propType.startsWith('_') ){
          return true
        }
        return false
      })

    const stylingResult = []
    for (let index = 0; index < dynamicClassEventHandler.length+1; index++) {
      //this is a dict[key: string,value: string] prop
      const prop = dynamicClassEventHandler[index]
      if(prop && prop[0].indexOf('_') !== -1){
        const type = prop[0].split('-').find(e => e.indexOf('_') !== -1)
        stylingResult.push(`.${component.__name}${uniqueID}${type.replace('_', ':')}{ ${Object.entries(prop[1]).map(([k]) => `${k}:var(--${component.__name}-${type}-${k})`).join(';')}} `)
      }else if(!prop){
        const styleMapping = Object.entries(theme[component.__name]).map(([p,v])=> {
          
          if(typeof v !== 'object'){
            return `${p}:var(--${component.__name}-${p})`
          }
        }).filter(Boolean)
        stylingResult.push(`.${component.__name}${uniqueID}{${styleMapping.join(';')}} `)
      }

    }
    stylingResult.forEach(e =>{
      dynamicStyle.textContent += `${e} `
    })
    element.appendChild(dynamicStyle);
}*/
export function settingUpGlobalStyles(theme: Record<string, any>, element: HTMLElement, component: any): void {
  const dynamicStyle = document.createElement('style');
  dynamicStyle.setAttribute('type', 'text/css');
  const uniqueID = component['__scopeId'] ? `[${component['__scopeId']}]` : '';
  const componentName = component.__name
  const generateDynamicStyles = (selector: string, styles: any): string[] => {
    const stylingResult: string[] = [];

    Object.entries(styles).forEach(([prop, v]) => {
      const newSelector = prop.startsWith('_') ? `${selector}${prop}` : `${selector}-${prop}`;

      if (typeof v === 'object' && !Array.isArray(v) && !prop.startsWith('_')) {
        const generatedStyles = generateDynamicStyles(newSelector, v);
        stylingResult.push(...generatedStyles);
      } else if (prop.startsWith('_')) {
        const type = prop.split('-').find(e => e.indexOf('_') !== -1);
        stylingResult.push(`.${componentName}${uniqueID}${type.replace('_', ':')} { ${Object.entries(v).map(([k]) => `${k}:var(--${newSelector}-${k})`).join(';')}}`);
      } else {
        stylingResult.push(`.${componentName}${uniqueID} { ${prop}:var(--${newSelector}) }`);
      }
    });

    return stylingResult;
  };

  Object.entries(theme[component.__name]).forEach(([selector, styles]) => {
    const generatedStyles = generateDynamicStyles(component.__name, { [selector]: styles });
    combineStyles(generatedStyles).forEach(e => {
      dynamicStyle.textContent += `${e} `;
    });
  });

  element.appendChild(dynamicStyle);
}


function combineStyles(stylesArray: string[]): string[] {
  const combinedStyles: Record<string, string[]> = {};

  stylesArray.forEach(style => {
    const matches = style.match(/(.+?)\s*{([^}]+)}/);
    if (matches) {
      const [selector, properties] = matches.slice(1);
      if (!combinedStyles[selector]) {
        combinedStyles[selector] = [];
      }
      combinedStyles[selector].push(properties.trim());
    }
  });

  return Object.entries(combinedStyles).map(([selector, propertiesArray]) => {
    const combinedProperties = propertiesArray.join('; ');
    return `${selector} { ${combinedProperties} }`;
  });
}


