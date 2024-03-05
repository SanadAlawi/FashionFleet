export const getProductIndex = (product_id, list) => {
    const index = list.findIndex(p => p.product_id === product_id)
    return index
}