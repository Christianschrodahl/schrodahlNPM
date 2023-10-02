export default{
    body: {
      backgroundColor: 'white',
      color:'black'
      // Add more global styles here
    },
    CMainBar:{
      background: "rgb(6 6 6 / 5%)",
      color:"black",
    },
    CCard:{
      background: '#ffffff',
      color: '#000000',
      'border-color': '#7bbaff'
    },
    CDraw:{
      border: 'solid 1pd #000000',
      background: "#cdcdcd"
    },
    CButton: {
      primary: {
        bg: {
            base: '#253C57',
            _active: 'pink',
            _hover: '#0C2644',
            _focused: 'red'
        },
        font:{
            base: 'white',
            _active: 'pink',
            _hover: 'yellow',
            _focused: 'red'
        }
      },
      secondary: {
        bg: {
            base: 'blue',
            _active: 'yellow',
            _hover: 'green',
            _focused: 'purple'
        },
        font:{
            base: 'purple',
            _active: 'pink',
            _hover: 'white',
            _focused: 'red'
        }
      },
      unstyled: {
        bg: {
          base: 'inherit',
          _active: 'inherit',
          _hover: 'inherit',
          _focused: 'inherit'
      },
      font:{
        base: '#16191D',
        _active: 'white',
        _hover: 'white',
        _focused: 'white'
    }
    }
      
    },CAlert: {
      information: {
        bg: {
            base: 'blue',
            _active: 'lightblue',
            _hover: 'lightblue',
            _focused: 'lightblue'
        },
        font:{
            base: 'white',
            _active: 'pink',
            _hover: 'yellow',
            _focused: 'red'
        }
      },
      warning: {
        bg: {
            base: 'orange',
            _active: 'yellow',
            _hover: 'green',
            _focused: 'purple'
        },
        font:{
            base: 'black',
            _active: 'pink',
            _hover: 'white',
            _focused: 'red'
        }
      },
      success: {
        bg: {
            base: 'lightgreen',
            _active: 'yellow',
            _hover: 'green',
            _focused: 'purple'
        },
        font:{
            base: 'black',
            _active: 'pink',
            _hover: 'white',
            _focused: 'red'
        }
      }
    },
    colors: {
      primary: {
        base: '#0C2644',
        800: '#253C57',
      },
      secondary: 'pink'
    },

    // Add more global style configurations here
  };