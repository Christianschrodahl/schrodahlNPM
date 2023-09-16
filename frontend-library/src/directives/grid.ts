//EXAMPLE
  /**
   * <div v-row>[COLS GO HERE]</div>
   */
export const VRow = {
    beforeMount(el, binding) {
      const val = binding?.value;
      //TODO ADD NOGUTTER ROW
      // Apply the Flexbox grid layout to the element using CSS classes or other methods.
      if(binding.arg){
        el.classList.add(binding.arg);
      }
      switch (binding.arg) {
        case 'nowrap':
          el.classList.add(`nowrap`);
      }
      el.classList.add(`row`);
    },
  };
  //EXAMPLE
  /**
   * <c-text v-col="'xs3'" v-col:sm="'12'" >hello</c-text>
   */
  export const VCol = {
    beforeMount(el, binding) {
      const columns = binding?.value;
      //TODO ADD OFFSET COL
      //if arg and column set breakpoint ERROR
      if(binding.arg && !parseInt(columns)){
        console.error("Using directive 'arguments' and 'breakpoints' in value not ALLOWED", `arg:${binding.arg}, value: ${columns}. Either remove the 'Argument' or 'Breakpoint' from the directive.`)

      }
      switch (binding.arg) {
        case 'xs':
          el.classList.add(`col-xs${columns}`);
          return;
        case 'sm':
          el.classList.add(`col-sm${columns}`);
          return;
        case 'md':
          el.classList.add(`col-md${columns}`);
          return;
        case 'lg':
          el.classList.add(`col-lg${columns}`);
          return;
      
        default:
          break;
      }
      // Apply the Flexbox grid layout to the element using CSS classes or other methods.
      el.classList.add(`col-${columns}`);
    },
  };