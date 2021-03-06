/**
 * Native scrollTo with callback
 * @param offset - offset to scroll to
 * @param callback - callback function
 */
export const scrollTo = ({ offset, callback }: { offset: number; callback: () => void }) => {
    const fixedOffset = offset.toFixed();
    const onScroll = function () {
        if (window.pageYOffset.toFixed() === fixedOffset) {
            window.removeEventListener('scroll', onScroll);
            callback();
        }
    };

    window.addEventListener('scroll', onScroll);
    onScroll();
    window.scrollTo({
        top: offset,
        behavior: 'smooth',
    });
};
