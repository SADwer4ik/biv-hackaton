
export default function MainForm() {
    return (
        <div className="form-wrapper">
            <div className="top-part-form">
                <h3>Текст:</h3>
                <div className="input-and-btn">
                    <form>
                        <input type="text" />
                    </form>
                    <button className="enter-btn">Рассчитать</button>
                </div>
            </div>
            <div className="bottom-part-form">
                <h3>Результат:</h3>
                <div className="output-data">
                    <h3>1234</h3>
                </div>
            </div>
        </div>
    )
}