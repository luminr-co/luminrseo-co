export const fadeIn = (direction: String, delay: Number) => {
    return{
     hidden: {
        y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
     },
     show: {
        y: 0,
        opacity: 1,
        transition: {
            type: 'tween',
            duration: 1.5,
            delay: delay,
            ease: [0.25, 0.25, 0.25, 0.75],
        }
     }
    }
}