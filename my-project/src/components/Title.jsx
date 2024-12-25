const Title = ({ icon, title }) => {
    const renderIcon = icon ? (
        <span
            className="flex items-center justify-center"
            dangerouslySetInnerHTML={{ __html: icon }}
        />
    ) : null;
    
    return (
        <div className="flex flex-row items-center mt-8">
            {renderIcon}
            <h1 className="text-3xl font-semibold ml-2">{title}</h1>
        </div>
    );
};

export default Title;
