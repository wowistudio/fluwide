import { useEffect, useRef } from "react";

interface Props {
}

const Bubble: React.FC<Props & React.ComponentProps<"canvas">> = (props) => {
    const ref = useRef<HTMLCanvasElement>(null)

    // useEffect(() => {
    //     const context = ref?.current?.getContext('2d');
    //     let time = 0;

    //     if (!context)
    //         return

    //     const color = function (x: number, y: number, r: number, g: number, b: number) {
    //         context.fillStyle = `rgb(${r}, ${g}, ${b})`
    //         context.fillRect(x, y, 10, 10);
    //     }
    //     const R = function (x: number, y: number, time: number) {
    //         return (Math.floor(192 + 64 * Math.cos((x * x - y * y) / 300 + time)));
    //     }

    //     const G = function (x: number, y: number, time: number) {
    //         return (Math.floor(192 + 64 * Math.sin((x * x * Math.cos(time / 4) + y * y * Math.sin(time / 3)) / 300)));
    //     }

    //     const B = function (x: number, y: number, time: number) {
    //         return (Math.floor(192 + 64 * Math.sin(5 * Math.sin(time / 9) + ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100)));
    //     }

    //     const startAnimation = function () {
    //         for (let x = 0; x <= 200; x + 1) {
    //             for (let y = 0; y <= 200; y + 1) {
    //                 color(x, y, R(x, y, time), G(x, y, time), B(x, y, time));
    //             }
    //         }
    //         time = time + 0.03;
    //         window.requestAnimationFrame(startAnimation);
    //     }

    //     startAnimation();

    // }, [])

    return (
        <canvas ref={ref} {...props} />
    )
};

export default Bubble;
