export const findObject = (array: [], slugValue:string) => {

    const foundObj = array.filter((item: any) => item.fields.slug === slugValue)[0];
    return foundObj;

}