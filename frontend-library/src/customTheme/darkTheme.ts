export default{
    body: {
      backgroundColor: '#16191d',
      color: 'white'
      // Add more global styles here
    },
    CMainBar:{
      background: "#21252C",
      color:"#fff"
    },
    CCard:{
      background: '#21252C',
      color: '#ffffff',
      'border-color': '#7bbaff'
    },
    CButton: {
      primary: {
        bg: {
          base: '#7bbaff',
          _active: '#026bde',
          _hover: '#026bde',
          _focused: '#026bde'
      },
      font:{
          base: '#16191D',
          _active: 'white',
          _hover: 'white',
          _focused: 'white'
      }
      },
      secondary: {
        bg: {
            base: 'pink',
            _active: 'blue',
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
      },
    },
    CAlert: {
      information: {
        bg: {
            base: '#d2e1ff',
            _active: 'lightblue',
            _hover: 'lightblue',
            _focused: 'lightblue'
        },
        font:{
            base: '#16191D',
            _active: '#16191D',
            _hover: '#16191D',
            _focused: '#16191D'
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
        base: 'purple',
        800: 'green',
        _hover: 'yellow'
      },
      secondary: 'pink'
    }
    // Add more global style configurations here
  };