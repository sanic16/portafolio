const themeReducer = (
    state: Theme,
    action: {
        type: Primary | Bg
    }
) => {
    const primaryColors = {
        'color-1': 'color-1',
        'color-2': 'color-2',
        'color-3': 'color-3',
        'color-4': 'color-4',
        'color-5': 'color-5',
        'color-6': 'color-6',
        'color-7': 'color-7',
        'color-8': 'color-8'
    }

    const bgColors = {
        'bg-1': 'bg-1',
        'bg-2': 'bg-2'
    }
    
    switch (action.type) {
        case 'color-1':
        case 'color-2':
        case 'color-3':
        case 'color-4':
        case 'color-5':
        case 'color-6':
        case 'color-7':
        case 'color-8':
            return{                
                    ...state,
                    primary: primaryColors[action.type] as Primary               
            }
            
        case 'bg-1':
        case 'bg-2':
            return{                
                   ...state,
                     bg: bgColors[action.type] as Bg
                }
          
        default:
            return state
    }
        
}

export default themeReducer