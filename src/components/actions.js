export function onDelete(imageId, state){
    console.log('ghghghgh');
    const position = state.images.findIndex( img => img._id == imageId);
    state.images.splice(position, 1);
    const images = state.images;
    return {
        ...state,
        images
    }
}

export function onAdd(imageData, state){
    const images = state.images.slice();
    images.push(imageData);
    return {
        ...state,
        images
    }
}
