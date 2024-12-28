const Pill = () => {
    return (
        <div>
            <span class="relative inline-flex overflow-hidden rounded-full p-[2px]">
            <span class="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#3d48ba_0%,#e8dade_50%,#3d48ba_100%)]"></span>
            <div class="inline-flex gap-1 items-center justify-center w-full px-3 py-1 text-xs text-text_primary rounded-full backdrop-blur-3xl whitespace-nowrap bg-button_primary" id="bg-availableToWork">            <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-astro-cid-j7pv25f6=""> <path d="M0 0h24v24H0V0z" fill="none" data-astro-cid-j7pv25f6=""></path> <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" data-astro-cid-j7pv25f6=""></path> </svg>
            <span id="availableToWork">Disponible para trabajar!</span></div>
            </span>
        </div>
    );
}

export default Pill;


