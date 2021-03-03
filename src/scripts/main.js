const options: { root: HTMLElement | null; rootMargin: string; threshold: number[] } = {
	root: null,
	rootMargin: '200px',
	threshold: [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
};

const burgerButton = document.querySelector('.burgerButton') as HTMLButtonElement;
const primaryMenu = document.querySelector('.primary-menu') as HTMLUListElement;
const images = [...document.querySelectorAll('.mainContent img.lazyLoad')] as HTMLImageElement[];

const switchSrc = (imageEl: HTMLImageElement) => {
	imageEl.src = imageEl.dataset.src as string;
	imageEl.srcset = imageEl.dataset.srcset as string;
	imageEl.classList.add('loaded');
};

const loadImages = (entries: IntersectionObserverEntry[]): void => {
	entries.map((entry) => {
		if (entry.intersectionRatio > 0) {
			const img = entry.target as HTMLImageElement;
			switchSrc(img);
			imageObserver.unobserve(img);
		}
	});
};

const imageObserver = new IntersectionObserver((entries) => loadImages(entries), options);
if (images && !('loading' in HTMLImageElement.prototype))
	images.map((img) => imageObserver.observe(img));
else if (images) images.map((img) => switchSrc(img));

burgerButton.addEventListener('click', () => {
	burgerButton.classList.toggle('openBurger');
	primaryMenu.classList.toggle('shown');
});
