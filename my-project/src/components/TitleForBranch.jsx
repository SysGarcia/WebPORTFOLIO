const TitleForBranch = ({title, className }) => {
    return (
        <div className={`flex flex-row items-center my-3 ${className}`}>
            <h1 className="text-2xl font-semibold">{title}</h1>
        </div>
    );
};

export default TitleForBranch;
    