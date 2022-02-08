import useDimensions from 'react-cool-dimensions';

const useImageWidthResponsive = () => {
    const { observe, width } = useDimensions<HTMLDivElement | null>();
    const imageWidth = width !== undefined ? `${Math.round(width)}px` : '100vw';
    return { width: imageWidth, containerRef: observe };
};

export default useImageWidthResponsive;
