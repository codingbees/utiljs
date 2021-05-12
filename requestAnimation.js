function rq(callback, period) {
    let start;

    function step(timestamp) {
        if (start === undefined)
            start = timestamp;
        const elapsed = timestamp - start;
        if (elapsed > period) { // 在两秒后停止动画
            start = timestamp;
            callback()
        }
        // window.requestAnimationFrame(step);
        requestAnimationFrame(step)
    }

    // window.requestAnimationFrame(step);
    requestAnimationFrame(step)
}
export default rq