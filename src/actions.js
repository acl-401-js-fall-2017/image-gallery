import shortid from 'shortid';

export function createWonder(state, title, description, url) {
    const newWonder = { _id: shortid.generate() , title, description, url };
  
    return {
        ...state,
        wonders: [
            ...state.wonders,
            newWonder
        ]
    };
  }