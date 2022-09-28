import { CounterApp, CounterWithCustomHook } from '../01-useState';
import { FormWithCustomHook } from '../02-useEffect/FormWithCustomHook';
import { SimpleForm } from '../02-useEffect/SimpleForm';
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';
export const PageOne = () => {
	return (
		<>
			<div className="row ">
				<div className="col-12 col-xl-6">
					<CounterApp />
				</div>
				<hr className="d-block d-xl-block d-xxl-none mt-4" />
				<div className="col-12 col-xl-6">
					<CounterWithCustomHook />
				</div>
			</div>
			<hr />
			<div className="row">
				<div className="col-12 col-xl-6">
					<SimpleForm />
				</div>
				<hr className="d-block d-xl-block d-xxl-none mt-4" />
				<div className="col-12 col-xl-6">
					<FormWithCustomHook />
				</div>
			</div>
			<div className="row">
				<div className="col-12">
					<MultipleCustomHooks />
				</div>
			</div>
		</>
	);
};
