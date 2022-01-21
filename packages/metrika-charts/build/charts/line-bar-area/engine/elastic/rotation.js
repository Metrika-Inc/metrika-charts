export const calcChartRotation = (domainSide) => {
    switch (domainSide) {
        case 'bottom':
            return 0;
        case 'left':
            return 90;
        case 'right':
            return -90;
        case 'top':
            return 180;
        default:
            return 0;
    }
};
// determines if the two positions are either in the same position
// or in opposite sides (left and right, or top and bottom)
export const sameSide = (side1, side2) => {
    if (side1 === side2) {
        return true;
    }
    const rotSum = calcChartRotation(side1) + calcChartRotation(side2);
    return rotSum === 180 || rotSum === 0;
};
//# sourceMappingURL=rotation.js.map