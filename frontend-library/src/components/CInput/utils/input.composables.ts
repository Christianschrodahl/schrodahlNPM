import { ref, onMounted, toRefs, watch} from 'vue'
export function inputSettings (props){
    let error = ref()
    
    function validate(v?:any){
        console.log("VALIDATE")
        if(!props.rules) return
        const isInvalid = props.rules.map(r => {
            const validator = r(v)
            if(validator || validator !== true){
                return validator
            }
        } )
        //This will only give error if it not return undefined
        const returnValidation = isInvalid.find(r => r !== true)
        
        switch (typeof returnValidation) {
            case 'string':
            case 'boolean':
                error.value = returnValidation !== false ? returnValidation : true
                break;
            default:
                error.value = false
                break;
        }
        return error.value === false
    }
    //Checking if the old and new rule value is the same
    function deepEqual (a, b) {
        if (a === b) return true
      
        if (
          a instanceof Date &&
          b instanceof Date &&
          a.getTime() !== b.getTime()
        ) {
          // If the values are Date, compare them as timestamps
          return false
        }
      
        if (a !== Object(a) || b !== Object(b)) {
          // If the values aren't objects, they were already checked for equality
          return false
        }
      
        const props = Object.keys(a)
      
        if (props.length !== Object.keys(b).length) {
          // Different number of props, don't bother to check
          return false
        }
      
        return props.every(p => deepEqual(a[p], b[p]))
    }
    // Watch rule
    const {rules} = toRefs(props)
    watch(()=>rules, (newV, oldV)=>{
        if (deepEqual(newV, oldV)) return
            validate()
    },{ deep: true })
    onMounted(()=>{
        validate()
    })
    return {validate, error}
}