const Header = (props) => {
    function handleSubmit(event) {
        event.preventDefault();
        const searchValue = event.target[0].value;
        props.lonSubmit(searchValue);
        event.target[0].value = "";
    }
    return (
        <header className="Header">
            <h1>DNC Movie List</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Pesqise por filmes"/>
            </form>
        </header>
    )
}

export default Header