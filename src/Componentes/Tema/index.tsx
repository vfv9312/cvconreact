import "./style.css"

const Tema = () => {
    return(
        <label form="theme" className="theme">
	<span className="theme__toggle-wrap">
		<input id="theme" className="theme__toggle" type="checkbox" role="switch" name="theme" value="dark"/>
		<span className="theme__fill"></span>
		<span className="theme__icon">
			<span className="theme__icon-part"></span>
			<span className="theme__icon-part"></span>
			<span className="theme__icon-part"></span>
			<span className="theme__icon-part"></span>
			<span className="theme__icon-part"></span>
			<span className="theme__icon-part"></span>
			<span className="theme__icon-part"></span>
			<span className="theme__icon-part"></span>
			<span className="theme__icon-part"></span>
		</span>
	</span>
</label>
    );
}
export default Tema;