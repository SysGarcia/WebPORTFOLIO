import Title from '../Shared/Title';
import TimeFrame from '../Shared/TimeFrame.tsx';
import experience from '../../Data/work.json';

export const Work = ({className}) => {
    return (
        <section id="work" class={`${className}`}>
            <Title
            id="Titulo_Experiencia"
            title="Experiencia laboral"
            icon='<svg class="w-6 h-6 fill-text_primary sm:w-7 sm:h-7 flex-shrink-0 workicon_dark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.314 18.022l5 4.707a1 1 0 0 0 1.372 0l5-4.707a1 1 0 0 0 .28-.985L15.091 6.212 17.8 2.6A1 1 0 0 0 17 1H7a1 1 0 0 0-.8 1.6l2.709 3.612-2.875 10.825a1 1 0 0 0 .28.985zM15 3l-1.5 2h-3L9 3zm-4.231 4h2.462l2.649 9.975L12 20.627l-3.88-3.652z"></path></svg>'
            className='fade-in-delayed_rapid'
            />
            <TimeFrame items={experience} className="fade-in-delayed" />
        </section>
    );
};

    