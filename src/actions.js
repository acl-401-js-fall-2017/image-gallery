import shortid from 'shortid';

export function createWonder(wonders, title, description, url) {
    const newWonder = { _id: shortid.generate() , title, description, url };
  
    return [...wonders, newWonder];
  }