const [input, setInput] = useState({
	id: 1,
	desc: '',
	done: false,
});

const onInputChange = ({ target }) => {
	const desc = target.value;
	const id = new Date().getTime();
	setInput({ ...input, id, desc });
};
