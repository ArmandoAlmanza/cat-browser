interface CatProps {
    catId: string;
}

const CatCard = ({ catId }: CatProps) => {
    return (
        <article className="flex flex-col justify-center">
            <h1>{catId}</h1>
        </article>
    );
};

export default CatCard;
