/**
 * Break down regex into multiline
 * more here: https://stackoverflow.com/questions/12317049/how-to-split-a-long-regular-expression-into-multiple-lines-in-javascript
 * @param regs array of regex
 * @param options regex modifiers
 */
export function multilineRegExp(regs, options = '') {
    return new RegExp(regs.map(
        function(reg){ return reg.source; }
    ).join(''), options);
}
