import { useEffect, useState } from "react";

export default function useIntersection(elementRef) {
    const [isVisible, setIsVisible] = useState(false);

	const callback = (entries) => {
		const [entry] = entries;
		setIsVisible(entry.isIntersecting);
	}
    
	const options = {
		root: null,
		rootMargin: "0px",
		threshold: 1.0
	}

	useEffect(() => {
		const observer = new IntersectionObserver(callback, options);

		if (elementRef.current) observer.observe(elementRef.current);
		return () => {
			if (elementRef.current) observer.unobserve(elementRef.current);
		}
	}, [elementRef, options])


    return isVisible;


}