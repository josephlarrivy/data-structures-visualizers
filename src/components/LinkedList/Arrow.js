function Arrow({ beginX, beginY, endX, endY }) {
    const arrowStyle = {
        position: "absolute",
        top: `${beginY}px`,
        left: `${beginX}px`,
        width: "0",
        height: "0",
        borderTop: "10px solid transparent",
        borderBottom: "10px solid transparent",
        borderRight: "10px solid black",
        transform: `rotate(${getAngle(beginX, beginY, endX, endY)}deg)`
    };

    const lineStyle = {
        position: "absolute",
        top: `${beginY}px`,
        left: `${beginX}px`,
        width: `${getLength(beginX, beginY, endX, endY)}px`,
        height: "1px",
        backgroundColor: "black",
        transform: `rotate(${getAngle(beginX, beginY, endX, endY)}deg)`
    };

    function getLength(x1, y1, x2, y2) {
        const xDiff = x2 - x1;
        const yDiff = y2 - y1;
        return Math.sqrt(xDiff * xDiff + yDiff * yDiff);
    }

    function getAngle(x1, y1, x2, y2) {
        const angle = Math.atan2(y2 - y1, x2 - x1) * (180 / Math.PI);
        return angle;
    }

    return (
        <div>
            <div style={lineStyle}></div>
            <div style={arrowStyle}></div>
        </div>
    );
}

export default Arrow;