import { useEffect } from 'react';

const useViewportWidth = setViewportWidth => {
        useEffect( () => {
            window.addEventListener('resize', setViewportWidth)

            return () => {
                window.removeEventListener('resize', setViewportWidth)
            }
        }, []);
}

export default useViewportWidth;