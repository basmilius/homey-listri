export default function () {
    return (key: string) => Homey.__(key) ?? key;
}
