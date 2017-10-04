export function toBool(val: any): boolean {
    if (typeof val === 'string') {
        val = val.toLowerCase().trim();

        return (val === 'true' || val === '');
    }

    return !!val;
}
