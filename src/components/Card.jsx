function Card() {
    return (
        <template className="cards" id="cards">
            <article className="card">
                <button className="card__trash" type="button"></button>
                <img className="card__image" src="#" alt="."></img>
                <div className="card__box">
                    <h2 className="card__title">Карточка</h2>
                    <div className="card__like-box">
                        <button className="card__like" type="button"></button>
                        <p className="card__like-counter"></p>
                    </div>
                </div>
            </article>
        </template>
    )
}