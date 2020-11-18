const Category = props => {

    const mainClass = `category category--${props.type}`;



    return (
        <section className={mainClass}>
            <div className="category__container">

                {props.items.items.map((i, idx) => (
                    <button className="category__item" key={idx}>
                        {props.items.type === 'text' ? (
                            <h2>{i}</h2>
                        ) : (
                            <img src={i} />
                        )}
                    </button>
                ))}

            </div>
        </section>
    )

}

export default Category;