export default function enumToArray(obj: any) {
    return Object.values(obj).filter(prop => typeof prop === 'string');
}