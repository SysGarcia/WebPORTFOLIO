const Title = ({id, icon, title, className }) => {
    const renderIcon = icon ? (
        <span
            className="flex items-center justify-center"
            dangerouslySetInnerHTML={{ __html: icon }}
        />
    ) : null;
    
    return (
        <div className={`flex flex-row items-center mt-8 ${className}`}>
            {renderIcon}
            <h1 id={id} className="text-3xl font-semibold ml-2">{title}</h1>
        </div>
    );
};

export default Title;
