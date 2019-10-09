export const importDynamically = async (collection, path) => {
    await Object.entries(collection).reduce(async (accumulator, item) => {
        console.log('here',await System.import(`${path}${item[1]}`));
        accumulator[item[1]] = await System.import(`${path}${item[1]}`)
    }, {})
    }
;