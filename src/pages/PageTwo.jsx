import { FocusScreen } from '../04-useRef/FocusScreen';
import { Layout } from '../05-useLayoutEffect/Layout';
import { CallbackHook } from '../06-memos/CallbackHook';
import { MemoHook } from '../06-memos/MemoHook';
import { Memorize } from '../06-memos/Memorize';
import { Padre } from '../07-tarea-memo/Padre';

export const PageTwo = () => {
	return (
		<>
			<div className="row ">
				<div className="col-12 col-xl-6">
					<FocusScreen />
				</div>
				<hr className="d-block d-xl-block d-xxl-none mt-4" />
				<div className="col-12 col-xl-6">
					<Layout />
				</div>
			</div>
			<hr />
			<div className="row">
				<div className="col-12 col-xl-6">
					<Memorize />
				</div>
				<hr className="d-block d-xl-block d-xxl-none mt-4" />
				<div className="col-12 col-xl-6">
					<MemoHook />
				</div>
			</div>
			<hr />
			<div className="row">
				<div className="col-12 col-xl-6">
					<CallbackHook />
				</div>
				<hr className="d-block d-xl-block d-xxl-none mt-4" />
				<div className="col-12 col-xl-6">
					<Padre />
				</div>
			</div>
		</>
	);
};
